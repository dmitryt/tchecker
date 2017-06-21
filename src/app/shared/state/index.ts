import {ISubscription} from '../index';
import {reducer as subscriptions} from './subscriptions';
export {SubscriptionEffects, FETCH_SUBSCRIPTIONS, UPDATE_SUBSCRIPTION, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION} from './subscriptions';

export interface IAppState {
  subscriptions: ISubscription[]
};

export const AppState = {
  subscriptions,
};