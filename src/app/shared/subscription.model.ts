interface IDestination {
  value: string;
  id?: number;
}

export interface ISubscription {
  id?: number;
  from?: IDestination;
  to?: IDestination;
  date: string;
  lang: string;
  showDesktopNotifications?: boolean;
  notifyToEmail?: string;
}

export class Subscription implements ISubscription {
  from?: IDestination;
  to?: IDestination;
  date: string;
  lang: string;
  constructor() {
    this.from = {value: ""};
    this.to = {value: ""};
    this.date = new Date().toISOString();
  }
}