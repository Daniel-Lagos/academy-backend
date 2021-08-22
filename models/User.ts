import { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
  uid: string,
  name: string,
  surname: string,
  password: string,
  email: string,
  role: string,
  subject: [],
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
    type: String,
    require: true,
    default: 'User_Role',
    enum: ['User_Role', 'Teacher_Role']
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject'
  }
});

UserSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default model<IUser>('User', UserSchema);
