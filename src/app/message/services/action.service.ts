import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Contact } from '../models/models';



@Injectable()
export class ActionService {

    private usersUrl = 'users';  // URL to web api
    selectedContact: Subject<Contact> = new Subject<Contact>();

    constructor() { }
    
    /** Set selected contact as Observable subject */
    setSelesctedUser(contact: Contact) {
        this.selectedContact.next(contact);
    }

    /** get selected contact as Observable subject */
    getSelesctedUser(): Observable<Contact> {
        return this.selectedContact.asObservable();
    }
}
