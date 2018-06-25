import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AcademyShortGameService } from '../../services/academy-short-game.service';

@Component({
    selector: 'app-add-playlist-modal',
    templateUrl: './add-playlist-modal.component.html',
    styleUrls: ['./add-playlist-modal.component.css']
})
export class AddPlaylistModalComponent implements OnInit {

    form: FormGroup;
    user_id = 1;

    constructor(
        private readonly activeModal: NgbActiveModal,
        private service: AcademyShortGameService
    ) { }

    ngOnInit() {
        this.form = new FormGroup(
            {
                'name'    : new FormControl('', [Validators.required])
            }
        );
    }

    onOk() {
        if (this.form.valid) {
            this.service.createPlaylist(
                {
                    'user_id': this.user_id,
                    'name': this.form.get('name').value
                }
            ).subscribe(
                res=>{
                    console.log(res);
                    this.activeModal.close('OK');        
                },
                err => {
                    this.activeModal.dismiss('Close');
                }                
            );
        } else {
            this.activeModal.dismiss('Close');
        }        
    }
}
