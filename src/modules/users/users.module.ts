import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './../../modules/users/users.controller';
import { UsersService } from './../../services/users/users.service';
import { UsersSchema } from './../../schema/users/users.schema';
@Module({
  imports: [
    /* add database modal to the database */
    MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
