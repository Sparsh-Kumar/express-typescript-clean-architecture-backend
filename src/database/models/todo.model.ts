import mongoose from 'mongoose';
import { TodoStatus } from '../../todo/types';

const TodoModel: mongoose.Schema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    default: '',
    maxLength: 15,
  },
  status: {
    type: String,
    enum: TodoStatus,
    default: TodoStatus.IN_PROGRESS,
  },
}, { timestamps: true });

export default TodoModel;
