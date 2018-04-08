
import { Alert } from './alert';

import { AlertServer } from './AlertServer';


import { of } from 'rxjs/observable/of';
import { Http, Response } from "@angular/http"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Icons } from './icons';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AlertService {

  private addalert ='http://localhost:8080/Bocazas/webresources/entities.alerts/';
  private findAllAlertsUrl = 'http://localhost:8080/Bocazas/webresources/entities.alerts/';  // URL to web api
  private addVerification = 'http://localhost:8080/Bocazas/webresources/entities.alerts/add/';

  constructor( private http: HttpClient ) {}

    /** GET alerts from the server */
  getAlerts () {
    return this.http.get(this.findAllAlertsUrl);
  }

  newAlert(a: AlertServer): Observable<AlertServer>{
    console.log(a.icon.idIcon);
    //this.addalert = this.addalert + a.message + '/' + a.verifications + '/' + a.alertTime + '/' + a.icon.idIcon + '/';
    this.addalert = this.addalert  + a.icon.idIcon;
    return this.http.post(this.addalert, a)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }


  setVerifications(idAlert : string) {
    return this.http.get(this.addVerification+idAlert);
  }

}
