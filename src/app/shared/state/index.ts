import {ISubscription} from '../index';
import {reducer as subscriptions} from './subscriptions';
import {reducer as notifications} from './notifications';
export { getSubscriptionsAction, FETCH_SUBSCRIPTIONS, UPDATE_SUBSCRIPTION, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION} from './subscriptions';
export { pushNotificationAction, removeNotificationAction } from './notifications/';

export interface INotification {
  content: string;
}

export interface IAppState {
  subscriptions: ISubscription[],
  notifications: INotification[],
};

export const AppState = {
  subscriptions,
  notifications,
};