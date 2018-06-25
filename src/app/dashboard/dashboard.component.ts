import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [
        DashboardService
    ]
})
export class DashboardComponent implements OnInit {

    constructor(private service: DashboardService) {
    }

    ngOnInit() {
        this.service.getCourses().subscribe(courses => {
            localStorage.setItem('courses', JSON.stringify(courses));
        });
    }
}
