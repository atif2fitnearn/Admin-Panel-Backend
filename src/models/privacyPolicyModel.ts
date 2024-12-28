import mongoose, { Document, Schema } from 'mongoose';

interface IPrivacyPolicy extends Document {
    content: object;
    updatedAt: Date;
}

const PrivacyPolicySchema: Schema = new Schema({

  
content: {
    type: Schema.Types.Mixed, // Mixed type for flexible structure
    required: true,
  },
}, { timestamps: true });

const PrivacyPolicy = mongoose.model<IPrivacyPolicy>('PrivacyPolicy', PrivacyPolicySchema);

export default PrivacyPolicy;
