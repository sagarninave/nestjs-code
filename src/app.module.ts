import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    /* configuration files live .env  */
    ConfigModule.forRoot(),
    /* database connection with the database name called nest */
    MongooseModule.forRoot(process.env.MONGO_DB_URL, { useNewUrlParser: true }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
