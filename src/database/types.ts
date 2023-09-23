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

export class Employee {
  _id: string;

  name: string;

  email: string;

  address: string;

  phone: string;

  createdAt: Date;

  updatedAt: Date;
}
