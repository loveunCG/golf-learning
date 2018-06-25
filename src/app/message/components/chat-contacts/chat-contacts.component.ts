import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { ActionService } from '../../services/action.service';
import { environment } from '../../../../environments/environment';
import { Contact, MessageType } from '../../models/models';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../../users/user.service';
import { DatePipe } from '@angular/common';

import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Rx';

const SERVER_URL = `${environment.serverUrl}/`;

@Component({
    selector: 'app-chat-contacts',
    templateUrl: './chat-contacts.component.html',
    styleUrls: ['./chat-contacts.component.scss']
})

export class ChatContactsComponent implements OnInit, OnDestroy {

    avatarUrl = SERVER_URL;
    contacts: Contact[] = [];
    contactsAll: Contact[] = [];
    selectedContactId: number = 0;
    currentUser: Contact;
    searchUser: string = '';
    MessageType = MessageType;

    private subScriptions: Subscription[];

    constructor(
        private contactService: ContactService,
        private messageService: MessageService,
        private actionService: ActionService,
        private userService: UserService,
        private datePipe: DatePipe
    ) { }

    ngOnInit() {
        this.contacts=[{
            id: 6,
            name: "Brett Silvernail",
            image: "/assets/images/admin/default.png",
            message: "Hey Guys. What have you been up to? I would like to find someone to play with this weekend. Let me know what you have planned",
            time: new Date(2018,4,28,16,0,0),
            diff_time: new Date(2018,4,28,16,0,0),
            unreads: 3
        },{
            id: 2,
            name: "Brett Silvernail",
            image: "/assets/images/admin/default.png",
            message: "Hey Guys. What have you been up to? I would like to find someone to play with this weekend. Let me know what you have planned",
            time: new Date(2018,4,28,16,0,0),
            diff_time: new Date(2018,4,28,16,0,0),
            unreads: 3
        },{
            id: 3,
            name: "Sean Fekete",
            image: "/assets/images/admin/default.png",
            message: "Hey Guys. What have you been up to? I would like to find someone to play with this weekend. Let me know what you have planned",
            time: new Date(),
            diff_time: new Date(2018,4,28,2,0,0),
            unreads: 0
        },{
            id: 4,
            name: "Brett Silvernail",
            image: "/assets/images/admin/default.png",
            message: "Hey Guys. ",
            time: new Date(),
            diff_time: new Date(2018,4,27,16,0,0),
            unreads: 1
        },{
            id: 5,
            name: "Brett Silvernail",
            image: "/assets/images/admin/default.png",
            message: "Hey ",
            time: new Date(),
            diff_time: new Date(2017,4,25,16,0,0),
            unreads: 1
        }]
        this.currentUser = {
            id: 1,
            name: "Admin",
            image: 'images/chat_images/1524152396client02.png',
            message: "string",
            time: null,
            diff_time: new Date(),            
            unreads: 0
        }
        // this.userService.getCurrentUser().subscribe(
        //     res => {
        //         console.log(res)
        //     }
        // );
        // this.currentUser = this.contactService.getCurrentUser();
        // // get all contacts
        // let userSubscription = this.contactService.getContacts(this.currentUser.id).subscribe(
        //     res => {
        //         if (res) {
        //             this.contactsAll = res.data;
        //             this.contacts = this.contactsAll.filter(
        //                 contact => {
        //                     return contact.id != this.currentUser.id;
        //                 }
        //             );

        //             this._updateMessageTimer();

        //             // first select
        //             if (this.contacts.length) {
        //                 this.selectContact(this.contacts[0], true);
        //             }
        //         }
        //     }
        // );
        // this.subScriptions = [];
        // this.subScriptions.push(userSubscription);

        // // update timer for contact time
        // let timer = Observable.timer(1000);
        // let timeSubscription = timer.subscribe((t) => {
        //     this.onUpdateTimer();
        // })
        // this.subScriptions.push(timeSubscription);
    }
    ngOnDestroy() {
        // this.subScriptions.forEach(sub => {
        //     if (sub) {
        //         sub.unsubscribe();
        //     }
        // });
    }
    private _updateMessageTimer() {
        if (this.contacts) {
            this.contacts.forEach(
                contact => {
                    let now = new Date();
                    if (contact.time) {
                        console.log(contact.time);
                        contact.diff_time = new Date((now.getTime() - contact.time.getTime()));
                    }
                }
            )
        }
    }
    onUpdateTimer() {
        console.log('update');
        this._updateMessageTimer();
    }

    selectContact(contact: Contact, isFirst = false) {
        this.actionService.setSelesctedUser(contact);
        this.selectedContactId = contact.id;
        if (isFirst == false) {
            this.updateUnreadMessages(contact);
        }
    }

    updateUnreadMessages(contact: Contact) {
        let data = {
            'sender': contact.id,
            'receiver': this.currentUser.id
        };
        this.messageService.updateUnreadMessage(data).subscribe(
            res => {
                contact.unreads = 0;
            }
        );
    }

    onEnter(event: any): void {
        this.contacts = this.contactsAll.filter(
            contact => {
                const name = contact.name.toLocaleLowerCase();
                return name.includes(this.searchUser.toLocaleLowerCase());
            }
        );
        event.preventDefault();
    }
    getPartialMsg(msg){
        return msg.substring(0,50) +(msg.length>50 ? '...':'');
    }
    getDisplayDate(date: Date){
        let now = new Date();

        if(date.getFullYear() < now.getFullYear() || date.getMonth() < now.getMonth() || date.getDay() < now.getDay()-7){
            return this.datePipe.transform(date,'shortDate');
        }
        if(date.getDay() >= now.getDay()-7 && date.getDay() < now.getDay()-1){
            return now.getDay()-date.getDay() + " days";
        }
        if(date.getDay() >= now.getDay()-1 && date.getHours() < now.getHours()-10){
            return now.getHours()-date.getHours() + " hr";
            
        }
        if(date.getHours() >= now.getHours()-10){
            return this.datePipe.transform(date,'shortTime');
            
        }
        
    }

}
