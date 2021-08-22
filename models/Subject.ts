import { Document, model, Schema } from 'mongoose';

interface ISubject extends Document {
  id: string,
  name: string,
}

const SubjectSchema: Schema = new Schema({
  name: {
    type: String,
    require: true
  },
});

SubjectSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default model<ISubject>('subject', SubjectSchema);
