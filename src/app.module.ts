import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';
import { TaskModule } from './task/task.module';
import { TimeBlockModule } from './time-block/time-block.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		AuthModule,
		TimeBlockModule,
		PomodoroModule,
		TaskModule,
		UserModule,
		ConfigModule.forRoot()
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
