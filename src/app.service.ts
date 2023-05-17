import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola me quiero morir :( no se nada 2023';
  }

  getAll(): string[] {
    return ['cabeza', 'Cabeza de pepito perez'];
  }
}
