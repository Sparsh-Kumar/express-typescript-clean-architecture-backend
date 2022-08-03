import { injectable } from 'inversify';
import mongoose, { Mongoose } from 'mongoose';

import TodoModel from './models/todo.model';
import AccountModel from './models/account.model';
import { Todo, Account } from './types';

@injectable()
export default class DbService {
  private _db: Mongoose;

  async connect(): Promise<void> {
    this._db = await mongoose.connect(process.env.MONGODB_URI);
  }

  get account(): mongoose.Model<Account> {
    return this._db.model<Account>('account', AccountModel, 'accounts');
  }

  get todo(): mongoose.Model<Todo> {
    return this._db.model<Todo>('todo', TodoModel, 'todos');
  }
}
