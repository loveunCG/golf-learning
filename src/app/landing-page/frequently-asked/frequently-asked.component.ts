import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-page-frequently-asked',
    templateUrl: './frequently-asked.component.html',
    styleUrls: ['./frequently-asked.component.scss']
})

export class FrequentlyAskedComponent implements OnInit {
  public isQuestion1 = true;
  public isQuestion2 = true;
  public isQuestion3 = true;
  public isQuestion4 = true;
  public isQuestion5 = true;
  public isQuestion6 = true;
    constructor() { }
    ngOnInit() {
    }
}
