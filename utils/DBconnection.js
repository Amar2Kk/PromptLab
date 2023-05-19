import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)
  if (isConnected) {
    console.log('Database is already connected 👍');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'Promptlab',
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    isConnected = true;
    console.log('Database is connected ✅');
  } catch (error) {
    console.log('Database connection error ❗:', error);
  }
}