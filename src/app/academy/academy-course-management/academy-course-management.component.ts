import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-academy-course-management',
  templateUrl: './academy-course-management.component.html',
  styleUrls: ['./academy-course-management.component.css']
})
export class AcademyCourseManagementComponent implements OnInit {


  constructor() {  }

  ngOnInit() {

      $('#circle').circleProgress({
          value: 0.34,
          size: 60,
          thickness: 8,
          fill : {
              color: '#0691ff'
          }
      });

  }


}
