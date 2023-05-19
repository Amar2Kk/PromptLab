import { connectToDB } from "@utils/DBconnection"
import Prompt from "@models/prompt"


export const GET = async (request, { params }) => {
  try {
    await connectToDB()
    const prompts = await Prompt.find({ creator: params.id }).populate('creator')
    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    console.log(error);
    return new Response('Failed to fetch prompts!', { status: 500 })
  }
}