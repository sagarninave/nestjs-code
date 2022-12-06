import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './../../interfaces/users/user.interface';
import { CreateUserDTO } from './../../dataTypeObject/users/createUser.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private readonly userModel: Model<IUser>) {}

  /* create new user to the database service */
  async createUser(createUserDTO: CreateUserDTO): Promise<IUser> {
    try {
      const newUser = new this.userModel(createUserDTO);
      return newUser.save();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  /* get all users from database service */
  async getAllUsers(): Promise<IUser[]> {
    try {
      const users = await this.userModel.find().exec();
      return users;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  /* get user service */
  async getUser(userID): Promise<IUser> {
    try {
      const user = await this.userModel.findById(userID).exec();
      return user;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  /* update user's details service */
  async updateUser(userID, createUserDTO: CreateUserDTO): Promise<IUser> {
    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(
        userID,
        createUserDTO,
        { new: true },
      );
      return updatedUser;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  /* delete users service */
  async deleteUser(userID): Promise<IUser> {
    try {
      const deletedUser = await this.userModel.findByIdAndRemove(userID);
      return deletedUser;
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
