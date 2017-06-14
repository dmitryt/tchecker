interface IDestination {
  value: string;
  id: number;
}

export interface ISubscription {
  from: IDestination;
  to: IDestination;
  date: string;
  lang: string;
  showDesktopNotifications: boolean;
  notifyToEmail?: string;
}