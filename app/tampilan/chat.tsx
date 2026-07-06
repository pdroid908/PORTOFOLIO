'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<
    { role: 'user' | 'ai'; text: string }[]
  >([
    {
      role: 'ai',
      text: "Hi! I'm Putra AI. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const dragControls = useDragControls();

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  async function handleSendMessage(e?: React.FormEvent) {
    e?.preventDefault();

    if (!input.trim() || isLoading) return;

    const text = input;

    setInput('');

    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text,
      },
    ]);

    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: data.reply ?? 'Server Error.',
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: 'Failed to connect.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            dragElastic={0.08}
            whileDrag={{
              scale: 1.02,
            }}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            className="fixed bottom-24 right-6 z-[9999] w-[430px] h-[620px] rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-2xl shadow-2xl shadow-cyan-950/30 overflow-hidden flex flex-col"
          >
            {/* HEADER */}
            <div
              onPointerDown={(e) => dragControls.start(e)}
              className="cursor-grab active:cursor-grabbing border-b border-white/10 bg-white/5 px-5 py-4 flex items-center justify-between select-none"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                  <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-50"></div>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Putra AI
                  </p>

                  <p className="text-xs text-slate-400">
                    Backend Developer Assistant
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* BODY */}

            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto p-5"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex ${
                    msg.role === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-br-md bg-cyan-500 text-white'
                        : 'rounded-bl-md border border-white/10 bg-white/5 text-slate-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="text-sm text-slate-400 animate-pulse">
                  Putra AI is typing...
                </div>
              )}
            </div>

            {/* INPUT */}

            <form
              onSubmit={handleSendMessage}
              className="border-t border-white/10 bg-black/20 p-4"
            >
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500"
                />

                <button
                  disabled={!input.trim() || isLoading}
                  className="rounded-xl bg-cyan-500 px-5 font-medium text-white transition hover:bg-cyan-600 disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING BUTTON */}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-white shadow-2xl shadow-cyan-500/40"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
      </motion.button>
    </>
  );
}