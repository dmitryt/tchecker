import {environment} from 'environments/environment';

// function getServiceUrls(lang) {
//   const HOST = `http://booking.uz.gov.ua/${lang}/purchase`;
//   return {
//     CITIES: `${HOST}/station/`,
//     TICKETS: `${HOST}/search/`,
//   };
// }
function getProxyUrls(lang) {
  const HOST = `http://localhost:3000/${lang}`;
  return {
    CITIES: `${HOST}/cities`,
    TICKETS: `${HOST}/tickets`,
  };
}
export const URLS = getProxyUrls;
export const DATABASE_NAME = 'tch_db';
export const DATE_FORMAT_RU = 'DD.MM.YYYY';
export const DATE_FORMAT_EN = 'MM.DD.YYYY';
export const MONITORING_INTERVAL = 1 * 60 * 1000;
// export const MONITORING_INTERVAL = 10 * 60 * 1000;