import { Icons } from './icons'
export class AlertServer {
  idAlert: number;
  message: string;
  verifications: number;
  alertTime: number;
  icon: Icons;

  constructor(
    idAlert: number,
    message: string,
    verifications: number,
    alertTime: number,
    icon: Icons
  ) {
      this.idAlert = idAlert;
      this.message = message;
      this.verifications = verifications;
      this.alertTime = alertTime;
      this.icon = icon;
    }



}
