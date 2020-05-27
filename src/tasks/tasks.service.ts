import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['lim', 'joo'];
  getAllTasks() {
    return this.tasks;
  }
}
