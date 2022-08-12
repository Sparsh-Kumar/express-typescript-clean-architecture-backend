import { Todo } from 'src/database/types';
import TodoStatus from '../types';

export default class TaskDto {
  public readonly id: string;

  public readonly account: string;

  public readonly description: string;

  public readonly status: TodoStatus;

  public readonly createdAt: Date;

  public readonly updatedAt: Date;

  constructor(
    id: string,
    account: string,
    description: string,
    status: TodoStatus,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.account = account;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(taskEntity: Partial<Todo>): TaskDto {
    return new TaskDto(
      taskEntity._id,
      taskEntity.account,
      taskEntity.description,
      taskEntity.status,
      taskEntity.createdAt,
      taskEntity.updatedAt,
    );
  }
}
