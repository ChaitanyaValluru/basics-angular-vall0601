import { Passenger } from "../models/passenger.interface";
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { of } from 'rxjs/observable/of'

const PASSENGER_API: string = 'data.json';
let headers = new Headers({
  'Content-Type': 'application/json'
});
let options = new RequestOptions({
  headers
});

@Injectable()
export class PassengerDashboardService{
  constructor(private http: Http){}

  getPassengers(): Observable<Passenger[]>{
    // return this.http.get(PASSENGER_API).map((response: Response) => response.json()).catch((error: any) => Observable.throw(error.json()));
    return of(this.data);
  }
  getPassengersPromise(): Promise<Passenger[]>{
    return this.http.get(PASSENGER_API).toPromise().then((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger, options).map((response: Response) => response.json()).catch((error: any) => Observable.throw(error.json()));
  }
  updatePassengerPromise(passenger: Passenger): Promise<Passenger>{
    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger, options).toPromise().then((response: Response) => response.json());
  }

  removePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`).map((response: Response) => response.json()).catch((error: any) => Observable.throw(error.json()));
  }
  removePassengerPromise(passenger: Passenger): Promise<Passenger>{
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`).toPromise().then((response: Response) => response.json());
  }

  data = [
    {
      "id": 1,
      "fullname": "ChAiTu",
      "checkedIn": true,
      "checkInDate": 1490742000000,
      "children": null
    },
    {
      "id": 2,
      "fullname": "Rose",
      "checkedIn": false,
      "checkInDate": null,
      "children": [
        {
          "name": "Ted",
          "age": 12
        },
        {
          "name": "Chloe",
          "age": 7
        }
      ]
    },
    {
      "id": 4,
      "fullname": "Louise",
      "checkedIn": true,
      "checkInDate": 1488412800000,
      "children": [
        {
          "name": "Jessica",
          "age": 1
        }
      ]
    },
    {
      "id": 5,
      "fullname": "Tina",
      "checkedIn": false,
      "checkInDate": null,
      "children": null
    }
  ];

}