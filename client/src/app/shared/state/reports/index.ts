
const NS = 'tch';
export const REPORTS = `${NS}/REPORTS`;
export const FETCH_REPORTS = `${NS}/FETCH_REPORTS`;
export const ADD_REPORTS = `${NS}/ADD_REPORTS`;

export const getReportsAction = payload => ({ type: REPORTS, payload });
export const addReportsAction = payload => ({type: ADD_REPORTS, payload});

export function reducer(state = [], {type, payload}) {
  switch(type) {
    case REPORTS:
      return [...payload];
    default:
      return state;
  }
}