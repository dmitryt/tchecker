
const NS = 'tch';
export const PUSH_NOTIFICATION = `${NS}/PUSH_NOTIFICATION`;
export const REMOVE_NOTIFICATION = `${NS}/REMOVE_NOTIFICATION`;

export const pushNotificationAction = payload => ({type: PUSH_NOTIFICATION, payload});
export const removeNotificationAction = payload => ({type: REMOVE_NOTIFICATION, payload});

export function reducer(state = [], {type, payload}) {
  switch(type) {
    case PUSH_NOTIFICATION:
      return [...state, {content: payload}];
    case REMOVE_NOTIFICATION:
      return [
        ...state.slice(0, payload),
        ...state.slice(payload + 1)
      ];
    default:
      return state;
  }
}