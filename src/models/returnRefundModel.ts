import mongoose, { Document, Schema } from 'mongoose';

interface IReturnRefund extends Document {
    content: object;
    updatedAt: Date;
}

const ReturnRefundSchema: Schema = new Schema({

content: {
    type: Schema.Types.Mixed, // Mixed type for flexible structure
    required: true,
  },
}, { timestamps: true });

const ReturnRefund = mongoose.model<IReturnRefund>('ReturnRefund', ReturnRefundSchema);

export default ReturnRefund;
