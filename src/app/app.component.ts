import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';
import { PlatformLocation } from '@angular/common'
import { AuthService } from './core/auth.service';
import { TalkService } from './_services/talk.service';
import { Talk } from './_models/talk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  talks: Talk[];

  constructor(private _router: Router, location: PlatformLocation, private _authService: AuthService,
    private _talkService: TalkService) {
   
  }

  ngOnInit() {
    if(window.location.href.indexOf('?postLogout=true') > 0) {
      this._authService.signoutRedirectCallback().then(() => {
        let url: string = this._router.url.substring(
          0,
          this._router.url.indexOf('?')
        );
        this._router.navigateByUrl(url);
      });
    }
  }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }

  isLoggedIn() {
    return this._authService.isLoggedIn();
  }

}


