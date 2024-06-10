import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
