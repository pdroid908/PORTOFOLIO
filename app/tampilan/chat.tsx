'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';

export default function ChatWidget() {
  const constraintsRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Putra AI. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Kontrol untuk drag agar hanya bisa digeser lewat header
  const dragControls = useDragControls();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.reply || "Maaf, error server." }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: "Gagal terhubung." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div  className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <motion.div
          drag
          dragListener={false} // Menonaktifkan drag otomatis agar bisa dikustomisasi
          dragControls={dragControls}
          dragConstraints={{ left: -300, right: 100, top: -400, bottom: 100 }} // Batasan area geser
          className="mb-4 w-96 h-[500px] bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-cyan-900/20 flex flex-col overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {/* Header (Drag Area) */}
          <div 
            onPointerDown={(e) => dragControls.start(e)}
            className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="font-semibold text-sm text-white">Putra (AI)</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-white transition-colors p-1"
            >✕</button>
          </div>
          
          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-3 px-4 rounded-2xl text-sm shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-cyan-600 text-white rounded-br-none' 
                  : 'bg-white/5 text-gray-200 border border-white/5 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {isLoading && <div className="text-xs text-gray-500 animate-pulse px-2">Putra AI sedang mengetik...</div>}
          </div>

          {/* Footer Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-white/5 bg-black/20 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-cyan-500/50 transition-all"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-white px-4 rounded-xl font-medium text-sm transition-all"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}

      {/* Bubble Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center text-white text-xl z-50 hover:scale-105 active:scale-95"
      >
        {isOpen ? '✕' : 'AI'}
      </button>
    </div>
  );
}