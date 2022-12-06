import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, Length } from 'class-validator';

/* data object for mapping data for create user request body */
export class CreateUserDTO {
  @ApiProperty({
    description: 'user first name',
    example: 'sagar',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  readonly first_name: string;
  @ApiProperty({
    description: 'user last name',
    example: 'ninave',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  readonly last_name: string;
  @ApiProperty({
    description: 'user email address',
    example: 'sagarninave@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(8, 30)
  readonly email: string;
  @ApiProperty({
    description: 'user phone number',
    example: '9657445206',
  })
  @IsNotEmpty()
  @IsString()
  @Length(10, 18)
  readonly phone: string;
  @ApiProperty({
    description: 'user creation date',
    example: 'viewer',
  })
  @IsNotEmpty()
  @IsString()
  @Length(6, 30)
  readonly role: string;
  @ApiProperty({
    description: 'user role',
    example: new Date(),
  })
  @IsNotEmpty()
  @IsString()
  readonly created_at: Date;
}
