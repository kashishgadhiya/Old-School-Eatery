// import mongoose, {model, models, Schema} from "mongoose";



// const MenuItemSchema = new Schema({
//   image: {
//     data:Buffer,
//     data: Buffer,
//     contentType: String
    
//     },
//   name: {type: String},
//   description: {type: String},
//   category: {type: mongoose.Types.ObjectId},
//   basePrice: {type: Number},
  
// }, {timestamps: true});

// export const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);
import mongoose, { Schema, model, models } from "mongoose";

const MenuItemSchema = new Schema({
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String
       
    },
    basePrice: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export const MenuItem = models.MenuItem || model('MenuItem', MenuItemSchema);
