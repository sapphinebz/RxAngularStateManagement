import { Injectable } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { UsersState } from './users/user.service';

interface ApplicationState {
  users: UsersState;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService extends RxState<ApplicationState> {
  constructor() {
    super();

    // const userId = this.get('userId');
  }
}
