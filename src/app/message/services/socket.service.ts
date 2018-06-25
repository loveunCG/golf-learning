import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

const SOCKET_URL = `${environment.socketUrl}`;

@Injectable()
export class SocketService {

    private socket;

    constructor() {
        this.socket = io(SOCKET_URL);
    }

  /*
  * Method to receive add-message-response event.
  */
  receiveMessages(): any {
    const observable = new Observable(observer => {
      this.socket.on('message-channel', (result) => {
        observer.next(result);
      });

      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
