import {ISubscription} from '../index';
import {subscriptions} from './subscriptions.reducer';

export interface IAppState {
  subscriptions: ISubscription[]
};

export const AppState = {
  subscriptions,
};