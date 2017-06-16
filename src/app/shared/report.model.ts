import {ISubscription} from './index';

interface IResult {
  subscriptio: ISubscription;
  data: Object;
}

export interface IReport {
  id?: number;
  updated_at: Date;
  results: IResult[];
}