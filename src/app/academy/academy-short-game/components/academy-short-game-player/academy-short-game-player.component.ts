import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AcademyShortGameService } from '../../services/academy-short-game.service';
import { User } from '../../../../users/models';
import { UserService } from '../../../../users/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPlaylistModalComponent } from '../add-playlist-modal/add-playlist-modal.component';
import { Playlist } from '../../models/models';
import { MessageService } from '../../../../message/services/message.service';
import { MessageType } from '../../../../message/models/models';

@Component({
    selector: 'app-academy-short-game-player',
    templateUrl: './academy-short-game-player.component.html',
    styleUrls: ['./academy-short-game-player.component.css']
})
export class AcademyShortGamePlayerComponent implements OnInit {
    
    forumForm: FormGroup;
    messageForm: FormGroup;
    user_id: number = 1;
    video_uid: number = 1;
    user;
    userlist: User[] = [];
    playlist: Playlist[] = [];
    activePlaylist: Playlist;

    @ViewChild('panel', { read: ElementRef }) public panel: any;
    
    constructor(
        private service: AcademyShortGameService,
        private userService: UserService,
        private messageService: MessageService,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.forumForm = new FormGroup(
            {
                'title'    : new FormControl('', [Validators.required]),
                'content'    : new FormControl('', [Validators.required])
            }
        );
        this.messageForm = new FormGroup(
            {
                'user'    : new FormControl('', [Validators.required]),
                'message'    : new FormControl('', [Validators.required])
            }
        );

        // get user lists
        this.userService.getUsers().subscribe (
            res=> {
                this.userlist = res.data;
            }
        );
        // get playlists
        this.loadPlaylist();
    }
    loadPlaylist() {
        this.service.getPlaylist(this.user_id).subscribe(
            res => {
                this.playlist = res.data;  
            }
        );
    }
    onSendMessage() {
        if (this.messageForm.valid) {
            const user = this.messageForm.get('user').value;
            if (user.id) {
                this.messageService.createMessage(
                    {
                        'sender': this.user_id,
                        'receiver': user.id,
                        'type': MessageType.MessageText,
                        'message': this.messageForm.get('message').value,
                        'ext': this.video_uid
                    }
                ).subscribe (
                    res=> {
                        alert(res.message);                        
                    }
                )
            } else {
                alert("User name doesn't match. Please try to input again");
            }

        }
    }

    onSendQuestion() {
        if (this.forumForm.valid) {
            this.service.createForum(
                {
                    'user_id': this.user_id,
                    'type': 'academy',
                    'title': this.forumForm.get('title').value,
                    'content': this.forumForm.get('content').value
                }
            ).subscribe (
                res=> {
                    alert(res.message);
                }
            )
        }
    }

    openVerticallyCentered() {
        this.modalService.open(AddPlaylistModalComponent, { centered: true }).result.then(
            (result) => {
                if (result == 'OK') {
                    // reload playlist
                    this.loadPlaylist();
                }
            }, 
            (reason) => {
            }
        );
    }

    onPreviousSearchPosition(): void {
        this.panel.nativeElement.scrollTop -= 20;
    }

    onNextSearchPosition(): void {
        this.panel.nativeElement.scrollTop += 20;
    }

    onClickPlaylistItem(list: Playlist): void {
        this.activePlaylist = list;
        this.activePlaylist.is_expand = !this.activePlaylist.is_expand;
    }

    onAddToPlaylist(): void {
        this.service.createPlayitem({
            'playlist_id': this.activePlaylist.id,
            'video_uid': this.video_uid
        }).subscribe(
            res => {
                console.log(res);
                this.loadPlaylist();
            }
        );
    }
}
