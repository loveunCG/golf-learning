import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlaylistModalComponent } from './components/add-playlist-modal/add-playlist-modal.component';
import { AcademyShortGameAlbumComponent } from './components/academy-short-game-album/academy-short-game-album.component';
import { AcademyShortGamePlayerComponent } from './components/academy-short-game-player/academy-short-game-player.component';
import { AcademyShortGameComponent } from './academy-short-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AcademyShortGameService } from './services/academy-short-game.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ApiService } from '../../api/api.service';
import { UserService } from '../../users/user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        Ng2AutoCompleteModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AcademyShortGameComponent,
        AcademyShortGameAlbumComponent,
        AcademyShortGamePlayerComponent,
        AddPlaylistModalComponent
    ],
    providers: [
        ApiService,
        UserService,
        AcademyShortGameService
    ],
    entryComponents: [
		AddPlaylistModalComponent
	]
})
export class AcademyShortModule { }
