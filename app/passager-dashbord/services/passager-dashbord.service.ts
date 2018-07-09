import { Passager } from './../models/passager.interface';
import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const PASSAGET_API: string = `/api/passagers`;
@Injectable()
export class PassagerDashbordServices {
    constructor(private http: Http) { }

    public getPassagers(): Observable<Array<Passager>> {
        return this.http.get(PASSAGET_API)
        .map((response: Response) => response.json()) 
    }
}   