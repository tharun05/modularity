import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestService {
    constructor(private http: HttpClient){
        
    }
    getHeroes (): Observable<any> {
        return this.http.get<Hero[]>(this.heroesUrl)
          .pipe(
            tap(heroes => this.log('fetched heroes')),
            catchError(this.handleError('getHeroes', []))
          );
      }
}