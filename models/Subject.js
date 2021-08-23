const { model, Schema } = require('mongoose');

const SubjectSchema = new Schema({
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

module.exports = model('subject', SubjectSchema);
