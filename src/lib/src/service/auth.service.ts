import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class AuthService {

  public castToken: Observable<string>;
  private token: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {

    this.castToken = this.token.asObservable();

    this.initToken();
  }

  public initToken() {
    const timer = setInterval(() => {
      console.log('setInterval: ');
      const token = localStorage.getItem('token');
      if ( token && token.length ) {
        console.log('Token from App1: ', token);
        this.token.next(token);
        clearInterval(timer);
      }
    }, 200);
  }

  getMeaning() {
    return 42;
  }
}
