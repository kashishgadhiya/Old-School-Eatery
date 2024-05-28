const { Schema, model ,models } = require("mongoose");
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    name :{type :String},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{type:String},
   
}, {timestamps:true})
UserSchema.post('validate',function(user){
    

    
})
// UserSchema.post('validate',function(){
//     console.log({arguments})
// })





export const User =  models?.User || model('User' ,UserSchema)
 