import { CreateUserDto } from 'src/modules/users/create.user.dto';

export class UserDataMotherObject {
  static getOne(...inputData): CreateUserDto {
    return new CreateUserDto({
      name: 'fooo',
      lastName: 'bar',
      phone: '86448674876',
      ...inputData,
    });
  }
}
