import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Contact } from '../models/models';
import { ApiService } from '../../api/api.service';

@Injectable()
export class ContactService {

    private usersUrl = 'users';  // URL to web api

    selectedUser: Subject<Contact> = new Subject<Contact>();

    constructor(
        private apiService: ApiService ) { }


    /** Get users form the server */
    getContacts (userId: number): Observable<any> {
        const url = `${this.usersUrl}?receiver=${userId}`;
        return this.apiService.get(url);
    }

    //   Current User
    getCurrentUser() {
        return {
            id: 1,
            name: "Admin",
            image: 'images/chat_images/1524152396client02.png',
            message: "string",
            time: null,
            unreads: 0
        } as Contact;
    }
}
