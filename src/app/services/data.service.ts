import { Injectable } from '@angular/core';

//import { URLSearchParams } from '@angular/http'; //old, get compat for old code < ng5
import { HttpClient, HttpHeaders, HttpParams, HttpHandler } from '@angular/common/http';
//import { BASE_URL } from "../shared/app.api";
import { map, catchError, delay, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private httpClient: HttpClient) { }
    
}