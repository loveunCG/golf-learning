import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Rx';

const API_URL = `${environment.apiUrl}`;

const httpOptions = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
};
@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    post(url: string, body: any): Observable<any> {
        const fullurl = `${API_URL}/${url}`;
        return this.http.post(fullurl, body, httpOptions).catch(this.handleError);
    }

    get(url: string): Observable<any> {
        const fullurl = `${API_URL}/${url}`;
        return this.http.get(fullurl, httpOptions).catch(this.handleError);
    }

    put(url: string, body: any): Observable<any> {
        const fullurl = `${API_URL}/${url}`;
        return this.http.put(fullurl, body, httpOptions).catch(this.handleError);
    }

    delete(url: string): Observable<any> {
        const fullurl = `${API_URL}/${url}`;
        return this.http.delete(fullurl, httpOptions).catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error('MessageService::handleError', error);
        return Observable.throw(error);
    }
}
