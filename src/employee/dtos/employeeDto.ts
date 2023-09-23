import { Employee } from 'src/database/types';

export default class EmployeeDto {
  public readonly id: string;

  public readonly name: string;

  public readonly email: string;

  public readonly address: string;

  public readonly phone: string;

  public readonly createdAt: Date;

  public readonly updatedAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    address: string,
    phone: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(employeeEntity: Partial<Employee>): EmployeeDto {
    return new EmployeeDto(
      employeeEntity._id,
      employeeEntity.name,
      employeeEntity.email,
      employeeEntity.address,
      employeeEntity.phone,
      employeeEntity.createdAt,
      employeeEntity.updatedAt,
    );
  }
}
