import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
