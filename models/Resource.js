const { model, Schema } = require('mongoose');

const ResourceSchema = new Schema({
  publicId: {
    type: String,
    required: [true, 'The public_id is required']
  },
  createdAt: {
    type: String,
    required: [true, 'The created_at is required']
  },
  format: {
    type: String,
    required: [true, 'The format is required']
  },
  originalFilename: {
    type: String,
    required: [true, 'The original name is required']
  },
  resourceType: {
    type: String,
    required: [true, 'The resource type is required']
  },
  url: {
    type: String,
    required: [true, 'The name is required']
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: [true, 'The resource needs an owner']
  }
});

ResourceSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Resource', ResourceSchema);
