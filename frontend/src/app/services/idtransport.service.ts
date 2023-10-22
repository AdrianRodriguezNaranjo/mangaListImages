import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdtransportService {

  userId: number = 0;

  setUserId(userId: number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
