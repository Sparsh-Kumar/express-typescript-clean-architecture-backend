/* eslint-disable max-classes-per-file */
import TodoStatus from 'src/todo/types';

export class Todo {
  _id: string;

  account: string;

  description: string;

  status: TodoStatus;

  createdAt: Date;

  updatedAt: Date;
}

export class Account {
  _id: string;

  username: string;

  hashedPassword: string;

  createdAt: Date;

  updatedAt: Date;
}
