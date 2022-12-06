import {
  Controller,
  HttpStatus,
  Param,
  Res,
  Get,
  Post,
  Put,
  Delete,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './../../services/users/users.service';
import { CreateUserDTO } from './../../dataTypeObject/users/createUser.dto';
import { IResponse } from './../../interfaces/miscellaneous/response.interface';
import { responseMessage } from './../../constants/messages';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /* create new user to the database */
  @Post()
  @ApiCreatedResponse({ description: responseMessage.USER_CREATED })
  @UsePipes(ValidationPipe)
  async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    try {
      const data = await this.usersService.createUser(createUserDTO);
      const response: IResponse = {
        message: responseMessage.USER_CREATED,
        data: data,
      };
      return res.status(HttpStatus.CREATED).json(response);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  /* get all user data from database using */
  @Get()
  @ApiOkResponse({ description: responseMessage.USERS_RETRIVED })
  async getAllUsers(@Res() res) {
    try {
      const users = await this.usersService.getAllUsers();
      const response: IResponse = {
        message: responseMessage.USERS_RETRIVED,
        data: users,
      };
      return res.status(HttpStatus.OK).json(response);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  /* get user by id */
  @Get('/:userID')
  @ApiOkResponse({ description: responseMessage.USER_RETRIVED })
  @ApiNoContentResponse({ description: responseMessage.USER_NOT_EXISTS })
  @ApiParam({
    name: 'userID',
    description: 'Get user by ID',
  })
  async getCustomer(@Res() res, @Param('userID') userID) {
    try {
      const user = await this.usersService.getUser(userID);
      const response: IResponse = {
        message: user
          ? responseMessage.USER_RETRIVED
          : responseMessage.USER_NOT_EXISTS,
        data: user || [],
      };
      const statusCode = user ? HttpStatus.OK : HttpStatus.NO_CONTENT;
      return res.status(statusCode).json(response);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  /* update user's details */
  @Put('/:userID')
  @UsePipes(ValidationPipe)
  @ApiOkResponse({ description: responseMessage.USER_RETRIVED })
  @ApiNoContentResponse({ description: responseMessage.USER_NOT_EXISTS })
  @ApiParam({
    name: 'userID',
    description: 'Update user by ID',
    allowEmptyValue: false,
  })
  async updateUser(
    @Res() res,
    @Param('userID') userID,
    @Body() createUserDTO: CreateUserDTO,
  ) {
    try {
      const user = await this.usersService.updateUser(userID, createUserDTO);
      return res.status(HttpStatus.OK).json({
        message: user
          ? responseMessage.USER_UPDATED
          : responseMessage.USER_NOT_EXISTS,
        data: user || [],
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }

  /* delete user's details */
  @Delete('/:userID')
  @ApiOkResponse({ description: responseMessage.USER_RETRIVED })
  @ApiNoContentResponse({ description: responseMessage.USER_NOT_EXISTS })
  @ApiParam({
    name: 'userID',
    description: 'Delete user by ID',
  })
  async deleteUser(@Res() res, @Param('userID') userID) {
    try {
      const user = await this.usersService.deleteUser(userID);
      return res.status(HttpStatus.OK).json({
        message: user
          ? responseMessage.USER_DELETED
          : responseMessage.USER_NOT_EXISTS,
        data: user || [],
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
