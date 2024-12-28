import mongoose, { Document, Schema } from 'mongoose';

interface IDataDeletion extends Document {
    content: object;
    updatedAt: Date;
}

const DataDeletionSchema: Schema = new Schema({

content: {
    type: Schema.Types.Mixed, // Mixed type for flexible structure
    required: true,
  },
}, { timestamps: true });

const DataDeletion = mongoose.model<IDataDeletion>('DataDeletion', DataDeletionSchema);

export default DataDeletion;
