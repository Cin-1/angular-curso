import { UserInterface } from './user.interface';

export interface TaskInterface {
  _id: string | number;
  title: string;
  tags: Array<string>;
  user: UserInterface;
  status: status;
}

enum status {
  inProgress = 'in-progress',
  completed = 'completed',
  wait = 'wait',
}
