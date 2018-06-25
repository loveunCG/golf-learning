import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {environment} from '../../environments/environment';

export const API_URL = environment.apiUrl;

@Injectable()
export class CourseService {

    constructor(private http: HttpClient) {
    }

    extractData(res: Response) {
        return res;
    }

    getCourses() {
        return this.http.get(API_URL + '/courses/').map(this.extractData);
    }

    //  getCourseDetails(id) {
    //     return this.http.get(API_URL + '/get-course-detail/' + id).map(this.extractData);
    // }

    getUniModules(id) {
        return this.http.get(API_URL + '/unimodules?course_id=' + id).map(this.extractData);
    }

    getChapters(id) {
        return this.http.get(`${API_URL}/chapters?unimodule_id=${id}`).map(this.extractData);
    }

    getVideo(course_id, unimodule_id, chapter_id) {
        if (typeof course_id === 'undefined') {
            course_id = 1;
        } else if (typeof unimodule_id === 'undefined') {
            unimodule_id = 1;
        } else if (typeof chapter_id === 'undefined') {
            chapter_id = 1;
        }

        return this.http.get(`${API_URL}/get_vimeo_video?course_id=${course_id}&unimodule_id=${unimodule_id}&chapter_id=${chapter_id}`)
            .map(this.extractData);
    }
}

