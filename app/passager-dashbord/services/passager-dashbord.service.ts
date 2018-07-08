import { Passager } from './../models/passager.interface';
import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class PassagerDashbordServices {
    constructor(private http: Http) {}
    
    public getPassagers(): Array<Passager> {
        return [
            {
                id: 1,
                fullname: "Fabio guelfi",
                checkIn: true,
                checkInDate: 14916020300,
                children: [{ name: "ivar", age: 7 }]
            },
            {
                id: 2,
                fullname: "Renata guelfi",
                checkIn: false,
                checkInDate: null
            },
            {
                id: 3,
                fullname: "Ana Julgia guelfi",
                checkIn: true,
                checkInDate: 18916020300
            },
            {
                id: 4,
                fullname: "Ivar guelfi",
                checkIn: false,
                checkInDate: 12916020300
            }
        ];
    }
}