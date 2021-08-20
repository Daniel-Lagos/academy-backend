import { Document, model, Schema } from 'mongoose';

interface IUser extends Document {
  uid: string,
  name: string,
  surname: string,
  password: string,
  email: string,
  role: string,
  resources: []
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  role: {
    type: String
  },
  resources: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Resource'
    }
  ]
});

UserSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model<IUser>('user', UserSchema);
