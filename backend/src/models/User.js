const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  user:{
    type: String,
    required:true
  },
  bio: String,
  avatar:{
    type: String,
    required:true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Dev',
  }],
  dislikes:[{
    type: Schema.Types.ObjectId,
    ref: 'Dev',
  }],
}, {
  timestamps: true
});

// generate createdAt => timestamps:true

module.exports = model('User', UserSchema);
