import { LooseObject } from 'src/common/interfaces/loose-object';

export default class BaseHttpResponse {
  public readonly data: LooseObject = {};

  public readonly error: string | null = null;

  public readonly statusCode: number = 200;

  constructor(
    data: LooseObject | null,
    error?: string | null,
    statusCode?: number,
  ) {
    this.data = data || null;
    this.error = error || null;
    this.statusCode = statusCode || 200;
  }

  public static success(
    data: LooseObject,
    statusCode = 200,
  ): BaseHttpResponse {
    return new BaseHttpResponse(data, null, statusCode);
  }

  public static failure(
    errorMessage: string | null,
    statusCode = 500,
  ): BaseHttpResponse {
    return new BaseHttpResponse({}, errorMessage, statusCode);
  }
}
