
import { User } from "@/app/models/User";
import clientPromise from "@/libs/mongoConnect";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";

if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.MONGO_URL);
}

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials;

     
        const user = await User.findOne({ email });

      
        if (user && bcrypt.compareSync(password, user.password)) {
          return user;
        }

        return null;
      }
    })
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
