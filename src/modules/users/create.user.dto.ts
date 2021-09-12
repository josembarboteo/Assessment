export class CreateUserDto {
  constructor({ name, lastName, phone }) {
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
  }

  name: string;
  lastName: string;
  phone: string;
}
