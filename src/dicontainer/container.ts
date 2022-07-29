import { Container } from 'inversify';
import DbService from '../database/db.service';
import TodoRepository from '../todo/todo.repository';
import TodoService from '../todo/todo.service';

const container = new Container({
  defaultScope: 'Singleton',
});

container.bind(DbService).toSelf();
container.bind(TodoRepository).toSelf();
container.bind(TodoService).toSelf();

export default container;
