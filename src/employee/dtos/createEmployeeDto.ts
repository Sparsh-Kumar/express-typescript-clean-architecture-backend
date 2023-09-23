import { Employee } from 'src/database/types';
import ValidationException from 'src/exceptions/validation-exception-handler';

export default class CreateEmployeeDto {
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

  static from(employeeBody: Partial<Employee>): CreateEmployeeDto | never {
    if (!employeeBody.name) {
      throw new ValidationException('Missing property employee name');
    }
    if (!employeeBody.email) {
      throw new ValidationException('Missing property email address.');
    }
    if (!employeeBody.address) {
      throw new ValidationException('Missing property address.');
    }
    if (!employeeBody.phone) {
      throw new ValidationException('Missing property phone number');
    }

    return new CreateEmployeeDto(
      employeeBody.name,
      employeeBody.email,
      employeeBody.address,
      employeeBody.phone
    )
  }
}
