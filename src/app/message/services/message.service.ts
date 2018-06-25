import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { Message } from '../models/models';
import { ApiService } from '../../api/api.service';

@Injectable()
export class MessageService {

  private messagesUrl = 'message';  // URL to web api
  messages: Message[] = [];

  constructor( private apiService: ApiService ) {

  }

  getChatHistory(userId: number, objectId): Observable<any> {
    const url = `${this.messagesUrl}?receiver=${userId}&&sender=${objectId}`;
    return this.apiService.get(url);
  }

  createMessage(message: any): Observable<any> {
    const url = `${this.messagesUrl}`;
    return this.apiService.post(url, message);
  }

  updateMessage(message: Message): Observable<any> {
    const url = `${this.messagesUrl}/${message.id}`;
    return this.apiService.put(url, message);
  }
  
  updateUnreadMessage(param: any): Observable<any> {
    const url = `${this.messagesUrl}status`;
    return this.apiService.put(url, param);
  }

  updateMessagesList(messages: Message[]) {
    this.messages = messages;
  }

  updateMessageOnList(message: Message) {
    const index = this.messages.findIndex(x => x.id === message.id);
    this.messages[index] = message;
  }

  addMessageOnList(message: Message) {
    this.messages.push(message);
  }
}
