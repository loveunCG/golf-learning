import { Injectable } from '@angular/core';
import { User } from './models';
import { ApiService } from '../api/api.service';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { TokenStorage } from '../auth/token-storage.service';

const USER_URL = 'users';


@Injectable()
export class UserService {

    constructor(
        private apiService: ApiService,
        private tokenService: TokenStorage
    ) { }

    /**
     *      Get Users
     */
    getUsers(): Observable<any> {
        return this.apiService.get(USER_URL);
    }
    /**
     *      Get Current User
     */
    getCurrentUser(): Observable<any> {
        return this.tokenService.getUserInfo();
    }
}
