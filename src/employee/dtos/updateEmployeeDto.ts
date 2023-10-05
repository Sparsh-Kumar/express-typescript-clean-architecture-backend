import { Employee } from 'src/database/types';

export default class UpdateEmployeeDto {
  public readonly name: string;

  public readonly email: string;

  public readonly address: string;

  public readonly phone: string;

  constructor(
    name: string,
    email: string,
    address: string,
    phone: string,
  ) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }

  static from(employeeBody: Partial<Employee>): UpdateEmployeeDto | never {
    return new UpdateEmployeeDto(
      employeeBody.name,
      employeeBody.email,
      employeeBody.address,
      employeeBody.phone,
    );
  }
}
