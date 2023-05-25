import { Injectable } from '@angular/core';
import { User, UserDetail } from '../model/common.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userId: number;
  users: User[] = [];

  constructor() {}

  userAleadyAdded(): boolean {
    return true;
  }

  getUsers(): void {}

  getUserDetail(id: number) {}

  addUser(user: UserDetail): void {}

  deleteUser(id: number): void {}
}
