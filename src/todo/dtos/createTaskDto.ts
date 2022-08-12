import { Todo } from 'src/database/types';
import ValidationException from 'src/exceptions/validation-exception-handler';

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
      throw new Error('Missing property account.');
    }

    if (!taskBody.description) {
      throw new ValidationException('Missing property description');
    }

    return new CreateTaskDto(
      taskBody.account,
      taskBody.description ? taskBody.description : '',
    );
  }
}
