import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { NgForm } from '@angular/forms';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AlertService } from '../alert.service'
import { AlertServer } from '../AlertServer'
import { Icons } from '../icons'

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements OnInit {

  title = 'BOCAZAS';

  currentJustify = 'fill';

  page = 1;

  myGroup: FormGroup;


  alerts: Alert[];
  found: boolean = true;

  constructor (private alertService: AlertService) {
    }


  ngOnInit() {
    this.getAlerts();
  }

  sendVerifications(id: string){
    this.alertService.setVerifications(id).subscribe(
      ( data: any[]) => {
        this.log("VA");

      window.location.reload();

    },
      err => {
        console.log(err);
      }
    );
  }

  private  getAlertTypeMessage(alert: Alert): Alert{

    switch(alert.alertType){
      case 1:{
        alert.alertTypeMessage = "Police Control";
        alert.urlIcon = "../../assets/IconosAlertas/ControlPolicial-transparent.png";
        break;
      }
      case 2:{
        alert.alertTypeMessage = "Radar in police car";
        alert.urlIcon = "../../assets/IconosAlertas/RadarCochePolicia-transparent.png";
        break;
      }
      case 3:{
        alert.alertTypeMessage = "Mobile radar"
        alert.urlIcon = "../../assets/IconosAlertas/RadarMovil-trans.png";
        break;
      }
      default:{
        alert.alertTypeMessage = "Helicopter";
        alert.urlIcon = "../../assets/IconosAlertas/Helicoptero-trans.png";
        break;
      }
    }
    return alert;
  }

  getAlerts(): void {
    this.alertService.getAlerts().subscribe(
      ( data: any[]) => {
        if (data.length) {
          this.found = true;
          this.alerts = new Array(data.length);
          for (var _i = 0; _i < data.length; _i++){
            var al = new Alert(data[_i].idAlert,
              data[_i].message,
              data[_i].idIcon.idIcon,
              data[_i].verifications,
              data[_i].alerTime);
              al = this.getAlertTypeMessage(al);
              this.alerts[_i] = al;
          }

       }
    },
      err => {
        console.log(err);
      }
    );
  }

  log(x) { console.log(x); }


}
