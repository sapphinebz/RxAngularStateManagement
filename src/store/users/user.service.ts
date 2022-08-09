import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';

export interface UsersState {
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService extends RxState<UsersState> {
  constructor() {
    super();

    // const userId = this.get('userId');
  }
}
