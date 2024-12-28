


import { Schema, model, Document } from "mongoose";

// Define the schema
const aboutUsSchema = new Schema(
  {
    content: {
      type: Object, // Structure for content (e.g., blocks, paragraphs, lists, etc.)
      required: true,
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create a model
const aboutUsModel = model<IAboutUs>("AboutUs", aboutUsSchema);

interface IAboutUs extends Document {
  content: any;
}

export default aboutUsModel;
