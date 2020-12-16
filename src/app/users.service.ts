import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: string;
  public password: string;

  constructor() { }
}
