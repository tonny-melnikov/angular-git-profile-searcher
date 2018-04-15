import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-dark bg-dark mb-4 text-center">
      <a class="navbar-brand" href="#">
        <img src="/assets/angularjs.png" width="30" height="30" alt="">
        GitHub profile Searcher on Angular
      </a>
    </nav>
    <div class="container">
      <app-profile></app-profile>
    </div>`,
  providers: [GithubService]
})
export class AppComponent  { }
