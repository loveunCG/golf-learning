import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
    constructor() { }

    ngOnInit() {
    }

    async ngAfterViewInit() {
        await this.loadScript('/assets/home/lib/jquery/js/jquery-3.2.1.slim.min.js');
        await this.loadScript('/assets/home/lib/popper/js/popper.min.js');
        await this.loadScript('/assets/home/lib/bootstrap/js/bootstrap.min.js');
    }

    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }
}
