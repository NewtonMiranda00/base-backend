import { mongoose } from '@/databases';

interface ITask extends mongoose.Document {
  title: string;
  description: string;
  done: boolean;
  createdAt: Number;
}

const TaskSchema = new mongoose.Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: () => '', 
  },
  done: {
    type: Boolean,
    default: () => false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'tasks' });

export const TaskModel = mongoose.model('Task', TaskSchema);
