import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banner } from './banner.model'
import { Observable } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})


export class ApiService<Banner> {

  private SERVER_URL = 'https://fast-lowlands-95849.herokuapp.com/api/common/getBanner'

  constructor(private httpClient: HttpClient) { }

  public getBanner(): Observable<Banner> {
    return this.httpClient.get(this.SERVER_URL).pipe(map(response => response as Banner));
  }
}
