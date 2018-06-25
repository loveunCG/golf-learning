import { Component, OnInit, ViewChild,Input } from '@angular/core';

import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs/Subscription';
import { ActionService } from '../../services/action.service';
import { SocketService } from '../../services/socket.service';
import { environment } from '../../../../environments/environment';
import { ContactService } from '../../services/contact.service';
import { Message, Contact, MessageType } from '../../models/models';

const SERVER_URL = `${environment.serverUrl}/`;

@Component({
    selector: 'app-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.scss']
})

export class ChatMessageComponent implements OnInit {

    @Input() messages: Message[] = [];
    @Input() selectedContact: Contact;
    draftMessage = '';
    selectedPromo = 'All';
    avatarUrl = SERVER_URL;

    currentUser: Contact;

    @ViewChild('uploadAnyFile') uploadAnyFile;
    @ViewChild('chatMessages') chatMessages;

    private messageSubscription: Subscription;
    private contactSubscription: Subscription;
    private receiveMessagesSubscription: Subscription;

    constructor(
        private messageService: MessageService,
        private actionService: ActionService,
        private socketService: SocketService,
        private contactService: ContactService
    ) { }

    ngOnInit() {
        this.currentUser = this.contactService.getCurrentUser();
        // this.contactSubscription = this.actionService.getSelesctedUser().subscribe(
        //     contact => {
        //         this.selectedContact = { ...contact };
        //         this.getChatHistory();
        //     }
        // );

        // this.receiveMessagesSubscription = this.socketService.receiveMessages().subscribe(response => {
        //     console.log(response);
        //     this.getChatHistory();
        //     this.scrollToBottom();
        // });
        this.contactSubscription = this.actionService.getSelesctedUser().subscribe(
            contact => {
                this.selectedContact = { ...contact };
                this.messages = [{
                    id: 1,
                    type: 0,
                    message: "Hey",
                    ext: "22",
                    created_at: new Date(),
                    sender: this.selectedContact.id,
                    receiver: "3",
                    status: 1
                },{
                    id: 2,
                    type: 0,
                    message: "Hey",
                    ext: "22",
                    created_at: new Date(),
                    sender: this.currentUser.id,
                    receiver: "3",
                    status: 1
                }]
            }
        );

    }

    sendMessage() {

        const message = {
            message: this.draftMessage,
            sender: this.currentUser.id,
            receiver: this.selectedContact.id,
            type: MessageType.MessageText,
        };

        this.messageService.createMessage(message).subscribe(
            res => {
            }
        );
        this.draftMessage = '';

    }

    sendImageMessage(image: any) {

        const message = {
            type: MessageType.MessageImage,          // image type
            message: image,
            sender: this.currentUser.id,
            receiver: this.selectedContact.id,
        };

        this.messageService.createMessage(message).subscribe(
            res => {
            }
        );

    }
    // trigger upload file
    triggerUploadFile = function () {
        if (this.uploadAnyFile) {
            this.uploadAnyFile.nativeElement.click();
        }
    };

    _handleReaderLoaded(e) {
        var reader = e.target;
        this.sendImageMessage(reader.result);
    }

    handleInputChange(e) {

        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file || !file.type.match(pattern)) {
            // alert('invalid format');
            return;
        }

        // this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }

    onEnter(event: any): void {
        if (this.draftMessage.trim() === '') {
            return;
        }
        this.messages.push({
            id: Math.floor((Math.random() * 1000) + 1),
            type: 0,
            ext: "22",
            created_at: new Date(),
            message: this.draftMessage,
            sender: this.currentUser.id,
            receiver: this.selectedContact.id.toString(),
            status: 1
        })
        this.sendMessage();
        event.preventDefault();
    }

    getChatHistory() {

        this.messageService.getChatHistory(this.currentUser.id, this.selectedContact.id).subscribe(
            res => {
                console.log(res);
                this.messages = res.data;
                // this.messageService.updateMessagesList(this.messages);

                this.scrollToBottom();
            },
            err => {
                console.log('ChatHistory : error');
                this.messages = [];
            }
        );

    }

    scrollToBottom(): void {

        setTimeout(() => {
            this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight
        }, 100);

    }
    getFirstName(fullname) {
        let firstName = fullname.split(" ")[0];
        return firstName
    }
    selectPromo(promo) {
        this.selectedPromo = promo;
    }
}
