import { Passager } from "./../models/passager.interface";
import { Inject, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const PASSAGER_API: string = `/api/passagers`;
@Injectable()
export class PassagerDashbordServices {
    constructor(private http: Http) { }

    public getPassagers(): Observable<Array<Passager>> {
        return this.http
            .get(PASSAGER_API)
            .map((response: Response) => response.json());
    }

    public updatePassager(passager: Passager): Observable<Passager> {
        return this.http
            .put(PASSAGER_API + `/${passager.id}`, passager)
            .map((response: Response) => response.json());
    }

    public removePassager(passager: Passager): Observable<Passager> {
        return this.http
            .delete(PASSAGER_API + `/${passager.id}`)
            .map((response: Response) => response.json());
    }
}
