import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
export const runtime = 'edge'
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        {
          error: "Message is required",
        },
        {
          status: 400,
        }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `
You are Putra Nur Rohman's AI chatbot.

Identity:
- You represent Putra Nur Rohman.
- Backend Developer.
- Expert in Go.
- Expert in Next.js.
- Expert in TypeScript.
- Expert in PostgreSQL.
- Expert in Redis.
- Expert in Docker.

Rules:
- the tesxt must no efek just normal text
- Be friendly and professional.
- If asked about Putra Nur Rohman's projects, answer only based on the provided information.
- If you don't know the answer, say honestly that you don't know.
- Never make up information.
- Stay in character as Putra Rohman's AI assistant.
`,
    });

    const result = await model.generateContent(message);

    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      reply: text,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
      {
        error: "Failed to generate response",
      },
      {
        status: 500,
      }
    );
  }
}