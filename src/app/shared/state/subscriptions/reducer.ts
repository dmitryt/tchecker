
const NS = 'tch';
export const FETCH_SUBSCRIPTIONS = `${NS}/FETCH_SUBSCRIPTIONS`;
export const UPDATE_SUBSCRIPTION = `${NS}/UPDATE_SUBSCRIPTION`;
export const ADD_SUBSCRIPTION = `${NS}/ADD_SUBSCRIPTION`;
export const REMOVE_SUBSCRIPTION = `${NS}/REMOVE_SUBSCRIPTION`;
export const SUBSCRIPTIONS = `${NS}/SUBSCRIPTIONS`;

export function reducer(state = [], {type, payload}) {
  switch(type) {
    case SUBSCRIPTIONS:
      return [...payload];
    default:
      return state;
  }
}