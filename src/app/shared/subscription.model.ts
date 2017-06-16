interface IDestination {
  value: string;
  id: number;
}

export interface ISubscription {
  id?: number;
  from: IDestination;
  to: IDestination;
  date: string;
  lang: string;
  showDesktopNotifications: boolean;
  notifyToEmail?: string;
}