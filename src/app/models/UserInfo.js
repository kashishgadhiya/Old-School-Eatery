import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
  email: {type: String, required: true},
phone :{type:String},
Address:{type:String},
city :{type:String},
sTate :{type:String},
pincode :{type:String},
admin:{type:Boolean,default:false}

}, {timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema); 