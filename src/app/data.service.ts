import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject, ReplaySubject, from, of, range, pipe, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
const _baseUrl_ = "https://api.github.com/";
@Injectable({
    providedIn: 'root'
})
export class DataService {

    temp_equipement_number: string = "";
    headers: Headers;
    options: RequestOptions;
    results: Object[];
    constructor(public http?: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }
    getData(url) {
        var response = this.http.get(_baseUrl_  + url).pipe(map(res => res.json()));
        return response;
    }
    
}