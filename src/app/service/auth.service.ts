import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // private _isLoggedIn = new BehaviorSubject<any>({name: 'govardhan', age: 28});

  private isLoggedInSub = new BehaviorSubject<boolean>(false);

  isLoggedInObs = this.isLoggedInSub.asObservable();

  setLoggedInValue(value: boolean){
    this.isLoggedInSub.next(value);
  }

  getLoggedInValue(){
    return this.isLoggedInObs;
  }

}
