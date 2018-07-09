import { Passager } from "./../models/passager.interface";
import { Inject, Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/trow";

const PASSAGER_API: string = `/api/passagers`;
@Injectable()
export class PassagerDashbordServices {
    constructor(private http: Http) { }

    public getPassagers(): Observable<Array<Passager>> {
        return this.http
            .get(PASSAGER_API)
            .map((response: Response) => response.json())
            .catch(((err: any) => Observable.throw(err.json())));
    }

    public updatePassager(passager: Passager): Observable<Passager> {
        let headers = new Headers({
            "Content-Type": "application-json"
        });
        let options = new RequestOptions({
            headers
        });
        return this.http
            .put(PASSAGER_API + `/${passager.id}`, passager, options)
            .map((response: Response) => response.json())
            .catch(((err: any) => Observable.throw(err.json())));
    }

    public removePassager(passager: Passager): Observable<Passager> {
        return this.http
            .delete(PASSAGER_API + `/${passager.id}`)
            .map((response: Response) => response.json())
            .catch(((err: any) => Observable.throw(err.json())));
    }
}
