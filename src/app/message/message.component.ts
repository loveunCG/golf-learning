import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActionService } from './services/action.service';
import { Message, Contact, MessageType } from './models/models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  private contactSubscription: Subscription;
  selectedContact: Contact;
  messages: Message[] = [];

  constructor( private actionService: ActionService) { }

  ngOnInit() {

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
            sender: 1,
            receiver: "3",
            status: 1
        }]
      }
  );
  }
  back(){
    this.selectedContact = null;
  }

}
