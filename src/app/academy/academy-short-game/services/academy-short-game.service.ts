import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { ApiService } from '../../../api/api.service';

@Injectable()
export class AcademyShortGameService {

    constructor(
        private apiService: ApiService
    ) {

     }

    /**
     *  Message
     */
    createMessage(message: any): Observable<any> {
        const url = `message`;
        return this.apiService.post(url, message);
    }

    /**
     *  Forums
     */
    createForum(forum: any): Observable<any> {
        const url = `forum`;
        return this.apiService.post(url, forum);
    }
    /**
     *  Play lists
     */
    createPlaylist(newPlaylist: any): Observable<any> {
        const url = `playlists`;
        return this.apiService.post(url, newPlaylist);
    }

    getPlaylist(userId: number) : Observable<any> {
        const url=`playlists/${userId}`;
        return this.apiService.get(url);
    }

    /**
     *  Play Items
     */

    createPlayitem(newPlayitem: any): Observable<any> {
        const url = `playitems`;
        return this.apiService.post(url, newPlayitem);
    }
    
    getPlayitem(playlist_id: number) : Observable<any> {
        const url=`playitems/${playlist_id}`;
        return this.apiService.get(url);
    }
}
