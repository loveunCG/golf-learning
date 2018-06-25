///<reference path="../../../node_modules/rxjs/add/operator/concatMap.d.ts"/>
import {Component, OnInit, ViewChild} from '@angular/core';
import {CourseService} from './course.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-message',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    providers: [
        CourseService
    ]
})
export class CourseComponent implements OnInit {
    id: '';
    coursesData: any;
    unimodulesData: any;
    chaptersData: any;

    iframe: any;
    video_iframe: any;

    @ViewChild('video_iframe_element') elementView;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: CourseService,
                private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.route.params.subscribe(params =>
            this.id = params['id']
        );

        this.service.getCourses().subscribe((courses: any) => {
            this.coursesData = courses.data;
        });

        this.router.events
            .filter(it => it instanceof NavigationEnd)
            .subscribe(it => this.loadModuleData());

        this.loadModuleData();
    }

    loadModuleData() {
        this.service.getUniModules(this.id)
            .concatMap((it: any) => {
                this.unimodulesData = it.data;
                return Observable.forkJoin(
                    this.unimodulesData.map(item => this.service.getChapters(item.id)),
                    (...values: Array<any>) => values
                );
            })
            .subscribe(data => {
                this.chaptersData = data;
            }, error => console.log(error));
    }

    loadVimeoVideo(_id, _unimodule_id, _chapter_id) {
        this.service.getVideo(_id, _unimodule_id, _chapter_id)
            .subscribe((iframe: any) => {
                this.iframe = iframe.data;
                const wid_start_position = this.iframe[0].html.indexOf('width="');
                const wid_end_position = this.iframe[0].html.indexOf(' height="');
                const str_width = this.iframe[0].html.substring(wid_start_position + 7, wid_end_position - 1);
                this.iframe[0].html = this.iframe[0].html.replace(str_width, `${this.elementView.nativeElement.clientWidth - 40}`);
                const hgt_start_position = this.iframe[0].html.indexOf('height="');
                const hgt_end_position = this.iframe[0].html.indexOf(' frameborder="');
                const str_height = this.iframe[0].html.substring(hgt_start_position + 8, hgt_end_position - 1);
                const aspect = Number(str_width) / Number(str_height);
                const height = (this.elementView.nativeElement.clientWidth - 40) / aspect;
                this.iframe[0].html = this.iframe[0].html.replace(str_height, `${height}`);
                this.video_iframe = this.sanitizer.bypassSecurityTrustHtml(this.iframe[0].html);
            });
    }
}
