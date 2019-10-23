import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Constants } from '../constants';
import { Observable } from 'rxjs';
import { Talk } from '../_models/talk';
import { AuthService } from '../core/auth.service';

@Injectable()
export class TalkService {
    constructor(private httpClient: HttpClient, private _authService: AuthService) { }

    getTalks(): Observable<Talk[]> {
        var accessToken = this._authService.getAccessToken();
        var headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

        return this.httpClient.get<Talk[]>(Constants.apiRoot + 'api/talks', { headers: headers });
        //return this.httpClient.get<Talk[]>(Constants.apiRoot + 'api/talks');
    }

    getTalk(talkId: number): Observable<Talk> {
        return this.httpClient.get<Talk>(Constants.apiRoot + 'Talks/' + talkId);
    }
}