import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { connectToDB } from "@utils/DBconnection";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {

    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email
      })
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB()
        //check if the user already exists
        const userExists = await User.findOne({ email: profile.email })

        // if not, create a new user
        if (!userExists) {
          await User.create({
            username: profile.name.replace(" ", "").toLowerCase(),
            email: profile.email,
            name: profile.given_name,
            image: profile.picture,
          })
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
})


export { handler as GET, handler as POST }