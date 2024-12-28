import mongoose, { Document, Schema } from 'mongoose';

interface ITermsCondition extends Document {
    content: object;
    updatedAt: Date;
}

const TermsConditionSchema: Schema = new Schema({

content: {
    type: Schema.Types.Mixed, // Mixed type for flexible structure
    required: true,
  },
}, { timestamps: true });

const TermsCondition = mongoose.model<ITermsCondition>('TermsCondition', TermsConditionSchema);

export default TermsCondition;
