import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page-icon-selector',
  templateUrl: './icon-selector.component.html',
  styleUrls: ['./icon-selector.component.scss']
})
export class IconSelectorComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

    selectTab(oldIndex, index) {
        $('#iconTab li:nth-child(' + oldIndex + ') a').removeClass('active');
        $('#iconTab li:nth-child(' + index + ') a').addClass('active');

        switch (oldIndex) {
            case 1:
                $('#online-academy').removeClass('show');
                $('#online-academy').removeClass('active');
                break;
            case 2:
                $('#skills-and-drills').removeClass('show');
                $('#skills-and-drills').removeClass('active');
                break;
            case 3:
                $('#community-forums').removeClass('show');
                $('#community-forums').removeClass('active');
                break;
            case 4:
                $('#chat-messenger').removeClass('show');
                $('#chat-messenger').removeClass('active');
                break;
            case 5:
                $('#members-store').removeClass('show');
                $('#members-store').removeClass('active');
                break;
            case 6:
                $('#play-practise-stats').removeClass('show');
                $('#play-practise-stats').removeClass('active');
                break;
        }

        switch (index) {
            case 1:
                $('#online-academy').addClass('show');
                $('#online-academy').addClass('active');
                break;
                case 2:
                $('#skills-and-drills').addClass('show');
                $('#skills-and-drills').addClass('active');
                break;
            case 3:
                $('#community-forums').addClass('show');
                $('#community-forums').addClass('active');
                break;
            case 4:
                $('#chat-messenger').addClass('show');
                $('#chat-messenger').addClass('active');
                break;
            case 5:
                $('#members-store').addClass('show');
                $('#members-store').addClass('active');
                break;
            case 6:
                $('#play-practise-stats').addClass('show');
                $('#play-practise-stats').addClass('active');
                break;
        }
    }
}
