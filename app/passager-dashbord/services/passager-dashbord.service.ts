import { Passager } from "./../models/passager.interface";
import { Inject, Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/toPromise";

const PASSAGER_API: string = `/api/passagers`;
@Injectable()
export class PassagerDashbordServices {
    constructor(private http: Http) { }

    public getPassagers(): Promise<Array<Passager>> {
        return this.http
            .get(PASSAGER_API)
            .toPromise()
            .then((response: Response) => response.json());
    }

    public updatePassager(passager: Passager): Promise<Passager> {
        let headers = new Headers({
            'Content-Type': 'application-json'
        });
        let options = new RequestOptions({
            headers
        })
        return this.http
            .put(PASSAGER_API + `/${passager.id}`, passager, options)
            .toPromise()
            .then((response: Response) => response.json());
    }

    public removePassager(passager: Passager): Promise<Passager> {
        return this.http
            .delete(PASSAGER_API + `/${passager.id}`)
            .toPromise()
            .then((response: Response) => response.json());
    }
}
