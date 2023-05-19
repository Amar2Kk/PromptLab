import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Creator is required!']
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required!'],
    unique: [true, 'Prompt already exists!'],
  },
  example: {
    type: String,
  },
  tag: {
    type: String,
    required: [true, 'Tag is required!'],
  }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;