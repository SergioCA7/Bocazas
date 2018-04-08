import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { NgForm } from '@angular/forms';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AlertService } from '../alert.service'
import { AlertServer } from '../AlertServer'
import { Icons } from '../icons'


@Component({
  selector: 'app-tab-new-alert',
  templateUrl: './tab-new-alert.component.html',
  styleUrls: ['./tab-new-alert.component.css']
})
export class TabNewAlertComponent implements OnInit {
  title = 'BOCAZAS';

  currentJustify = 'fill';

  page = 1;

  myGroup: FormGroup;


  alerts: Alert[];
  found: boolean = true;
  constructor (private alertService: AlertService) {
    }


  ngOnInit() {
    this.myGroup = new FormGroup({
        message_new : new FormControl('',Validators.required),
        alert_type : new FormControl('',Validators.required)
    });
  }

  sendNewAlert(){
    if (this.myGroup.valid) {
      this.log("ENTRO");
      this.log(this.myGroup.controls['message_new'].value);
      this.log(this.myGroup.controls['alert_type'].value);

      let icon  = new Icons(parseInt(this.myGroup.controls['alert_type'].value) , 0);
      var d = new Date();

      let newAlert = new AlertServer(null, this.myGroup.controls['message_new'].value, 0, d.getTime(), icon);
      this.log(newAlert.icon.idIcon);
      this.alertService.newAlert(newAlert).subscribe();

     }
  }
     log(x) { console.log(x); }

}
