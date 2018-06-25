import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {AuthService} from 'ngx-auth';

import {environment} from '../../environments/environment';

export const API_URL = environment.apiUrl;

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient) {
    }

    extractData(res: Response) {
        return res;
    }

    getCourses() {
        return this.http.get(API_URL + '/get-courses').map(this.extractData);
    }
}

