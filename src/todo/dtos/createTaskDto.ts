import { Todo } from 'src/database/types';

export default class CreateTaskDto {
  public readonly account: string;

  public readonly description: string;

  constructor(
    account: string,
    description: string,
  ) {
    this.account = account;
    this.description = description;
  }

  static from(taskBody: Partial<Todo>): CreateTaskDto | never {
    if (!taskBody.account) {
      throw new Error('account is required.');
    }
    return new CreateTaskDto(
      taskBody.account,
      taskBody.description ? taskBody.description : '',
    );
  }
}
