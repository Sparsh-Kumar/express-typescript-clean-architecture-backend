export enum TodoStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  NOT_COMPLETED = 'NOT_COMPLETED',
}

export class Todo {
  id: string;

  account: string;

  description: string;

  status: TodoStatus;
}

export interface LooseObject {
  [key: string]: any
}
