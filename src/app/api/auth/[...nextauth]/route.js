import { User } from "@/app/models/User";
import clientPromise from "@/libs/mongoConnect";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";



export const authOptions = {
   secret : process.env.SECRET,
   adapter:MongoDBAdapter(clientPromise),
   session: {
    // Set it as jwt instead of database
    strategy: "jwt",
  },
   providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     
    }),

    
        CredentialsProvider({
      
          name: 'Credentials',
          id: 'Credentials',
         
          credentials: {
            username: { label: "Email", type: "email", placeholder: "Email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
          
           const email = credentials?.email;
          const password = credentials?.password;
  
          
          mongoose.connect(process.env.MONGO_URL);

          const user = await User.findOne({email});
          const passwordOk = user && bcrypt.compareSync(password, user.password);
  
          if (passwordOk) {
            return user;
          }
  
          return null
          }
        })
      ],

}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
