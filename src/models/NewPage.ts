import mongoose, { Schema, Document } from "mongoose";

export interface INewPage extends Document {
  logoHeading: string;
  subHeading: string;
  heading: string;
  description: string;
  appStoreButton: string;
  googlePlayButton: string;
  updatedAt: Date;
}

const NewPageSchema: Schema = new Schema(
  {
    status:{type:String, required:true},
    applicationName:{type:String, required:true},
    logoHeading: { type: String, required: true },
    subHeading: { type: String, required: true },
    heading: { type: String, required: true },
    description: { type: String, required: true },
    appStoreButton: { type: String, required: true },
    googlePlayButton: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<INewPage>("NewPage", NewPageSchema);
