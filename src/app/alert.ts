import { Icons } from './icons';

export class Alert {
  idAlert: number;
  message: string;
  alertType: number; // to characterise the icon
  verifications: number;
  alertTime: number;
  icon: Icons;
  alertTypeMessage: string;
  urlIcon: string;

  constructor(
    idAlert: number,
    message: string,
    alertType: number,
    verifications: number,
    alertTime: number) {
      this.idAlert = idAlert;
      this.message = message;
      this.alertType = alertType; // to characterise the icon
      this.verifications = verifications;
      this.alertTime = alertTime;

    }



}
