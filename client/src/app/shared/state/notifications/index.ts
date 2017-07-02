
const NS = 'tch';
export const PUSH_NOTIFICATION = `${NS}/PUSH_NOTIFICATION`;
export const REMOVE_NOTIFICATION = `${NS}/REMOVE_NOTIFICATION`;

export const pushNotificationAction = payload => ({type: PUSH_NOTIFICATION, payload});
export const removeNotificationAction = payload => ({type: REMOVE_NOTIFICATION, payload});

export function reducer(state = [], {type, payload}) {
  switch(type) {
    case PUSH_NOTIFICATION:
      return [...state, payload];
    case REMOVE_NOTIFICATION:
      const index = state.map(n => n.id).indexOf(payload);
      if (index === -1) {
        return state;
      }
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}