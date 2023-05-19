import { connectToDB } from "@utils/DBconnection"
import Prompt from "@models/prompt"

export const POST = async (request) => {
  const { userId, prompt, example, tag } = await request.json()
  try {
    await connectToDB()
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      example,
      tag
    })
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 })
  } catch (error) {
    console.log(error);
    return new Response('Failed to create prompt!', { status: 500 })
  }
}