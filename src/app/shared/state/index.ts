import {ISubscription} from '../index';
import {reducer as subscriptions} from './subscriptions';

export {FETCH_SUBSCRIPTIONS} from './subscriptions';

export {SubscriptionEffects} from './subscriptions/effect';

export interface IAppState {
  subscriptions: ISubscription[]
};

export const AppState = {
  subscriptions,
};