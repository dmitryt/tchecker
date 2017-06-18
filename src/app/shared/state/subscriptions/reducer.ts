
const NS = 'tch';
export const FETCH_SUBSCRIPTIONS = `${NS}/FETCH_SUBSCRIPTIONS`;
export const SUBSCRIPTIONS = `${NS}/SUBSCRIPTIONS`;

export function reducer(state = [], {type, payload}) {
  switch(type) {
    case SUBSCRIPTIONS:
      return [...payload];
    default:
      return state;
  }
}