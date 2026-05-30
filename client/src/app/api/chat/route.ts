import { NextRequest } from "next/server";
import { openrouter } from "@/lib/openrouter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { message } = body;

    if (!message) {
      return Response.json(
        { error: "Message required" },
        { status: 400 }
      );
    }

    const completion =
      await openrouter.chat.completions.create({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      });

    return Response.json({
      response:
        completion.choices[0]?.message?.content,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "AI request failed" },
      { status: 500 }
    );
  }
}