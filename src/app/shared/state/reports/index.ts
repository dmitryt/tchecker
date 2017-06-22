
const NS = 'tch';
export const REPORTS = `${NS}/REPORTS`;
export const FETCH_REPORTS = `${NS}/FETCH_REPORTS`;
export const REMOVE_NOTIFICATION = `${NS}/REMOVE_NOTIFICATION`;

export const getReportsAction = payload => ({ type: REPORTS, payload });

export function reducer(state = [], {type, payload}) {
  switch(type) {
    case REPORTS:
      return [...payload];
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