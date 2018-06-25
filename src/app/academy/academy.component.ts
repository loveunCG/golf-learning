import {Component, OnInit} from '@angular/core';
import Player from '@vimeo/player';

@Component({
    selector: 'app-academy',
    templateUrl: './academy.component.html',
    styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {
    coursesData: '';
    private player: Player;

    constructor() {
    }

    ngOnInit() {


    }

}
