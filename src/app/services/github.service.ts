import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = process.env.CLIENT_ID;
    private client_secret = process.env.CLIENT_SECRET;

    constructor(private _http: Http) {
        console.log('Service ready');
        this.username = 'pinkyrabbit';
    }

    getUser() {
        // tslint:disable-next-line:max-line-length
        return this._http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .map(res => res.json());
    }

    getRepos() {
        // tslint:disable-next-line:max-line-length
        return this._http.get(`http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}
