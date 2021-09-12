import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { UserService } from 'src/modules/users/users.service';
import { UserDataMotherObject } from './userData.motherObject';

describe('User service test', () => {
  let userService: UserService;

  beforeEach(async () => {
    function mockUserModel(dto: any) {
      this.data = dto;
      this.save = () => {
        return this.data;
      };
    }

    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('User'),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('Shoould create user correctly', async () => {
    const userDto = UserDataMotherObject.getOne();
    const user = await userService.createUser(userDto);
    expect(user.name).toBe(userDto.name);
    expect(user.lastName).toBe(userDto.lastName);
    expect(user.phone).toBe(userDto.phone);
  });
});
