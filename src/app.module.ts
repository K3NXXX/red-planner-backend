import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { TimeBlockModule } from './time-block/time-block.module';

@Module({
	imports: [AuthModule, TimeBlockModule, TaskModule, UserModule, ConfigModule.forRoot()]
})
export class AppModule {}
