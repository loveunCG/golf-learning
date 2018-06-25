import {Component, OnInit} from '@angular/core';
import {AcademyService} from './academy.service';

@Component({
    selector: 'app-adacemy-menu',
    templateUrl: './adacemy-menu.component.html',
    styleUrls: ['./adacemy-menu.component.css'],
    providers: [
        AcademyService
    ]
})

export class AdacemyMenuComponent implements OnInit {

    constructor(private service: AcademyService) {
    }

    public courses: '';

    ngOnInit() {
        this.service.getCourses().subscribe((courses: any) => {
            this.courses = courses.data;
        });
    }

}
