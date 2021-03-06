import {ISubscription, IReport} from '../index';
import {reducer as subscriptions} from './subscriptions';
import {reducer as notifications} from './notifications';
import {reducer as reports} from './reports';

export { getSubscriptionsAction, FETCH_SUBSCRIPTIONS, UPDATE_SUBSCRIPTION, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION} from './subscriptions';
export { pushNotificationAction, removeNotificationAction } from './notifications/';
export { getReportsAction, addReportsAction, FETCH_REPORTS, ADD_REPORTS } from './reports/';

export interface INotification {
  id: number;
  type: string;
  message: string;
}

export interface IAppState {
  reports: IReport[],
  subscriptions: ISubscription[],
  notifications: INotification[],
};

export const AppState = {
  subscriptions,
  notifications,
  reports,
};