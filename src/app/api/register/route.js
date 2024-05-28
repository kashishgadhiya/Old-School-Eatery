import { User } from "@/app/models/User";
import mongoose from "mongoose";
import bcrypt from "bcrypt";


export async function POST(req){
    const body = await req.json()
    
    // mongoose.connect(process.env.MONGO_URL)
    mongoose.connect("mongodb+srv://kashishgadhiya24:UuA36hOINcwAukJd@cluster0.npwnou8.mongodb.net/old-school-eatery")

    const pass = body.password;
        if(  !pass?.length || pass.length <5){
          new  Error ('password must be at least 5 characters')
        }

        const notHashedPassword = pass ;
    const salt = bcrypt.genSaltSync(10);
    body.password  = bcrypt.hashSync(notHashedPassword,salt)






   const createdUser = await User.create(body)
   return Response.json(createdUser)


    
   

}