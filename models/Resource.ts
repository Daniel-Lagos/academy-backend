import { IUser } from './User';
import { model, Schema } from 'mongoose';

interface IResource extends Document {
  name: string,
  owner: IUser['_id']
}

const ResourceSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required']
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: [true, 'The resource needs an owner']
  }
});

module.exports = model<IResource>('Resource', ResourceSchema);
