interface IDestination {
  station: string;
  date: number;
  src_date: string;
}

export interface ITicketTracing {
  num: string;
  model: number;
  category: number;
  travel_time: string;
  from: IDestination;
  till: IDestination;
}