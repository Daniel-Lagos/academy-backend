const { model, Schema } = require('mongoose');

const ResourceSchema = new Schema({
  url: {
    type: String,
    required: [true, 'The name is required']
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: [true, 'The resource needs an owner']
  }
});

module.exports = model('Resource', ResourceSchema);
