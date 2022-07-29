import { injectable } from 'inversify';
import mongoose, { Mongoose } from 'mongoose';

import TodoModel from './models/todo.model';
import AccountModel from './models/account.model';

@injectable()
export default class DbService {
  private _db: Mongoose;

  async connect(): Promise<void> {
    this._db = await mongoose.connect(process.env.MONGODB_URI);
  }

  get account(): mongoose.Model<{ [x: string]: any; }> {
    return this._db.model('account', AccountModel, 'accounts');
  }

  get todo(): mongoose.Model<{ [x: string]: any; }> {
    return this._db.model('todo', TodoModel, 'todos');
  }
}
