import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { startOfDay, subDays } from 'date-fns';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}

	async getById(id:string) {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				tasks: true
			}
		})
	}


	async create(dto: TaskDto	) {
		return this.prisma.user.create({
			data: dto
		})
	}

	async update(id: string, dto: UserDto) {
		
	}

}
