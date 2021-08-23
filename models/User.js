const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
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

module.exports = model('User', UserSchema);
