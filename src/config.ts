import {environment} from 'environments/environment';

declare var process: any;

// function getServiceUrls(lang) {
//   const HOST = `http://booking.uz.gov.ua/${lang}/purchase`;
//   return {
//     CITIES: `${HOST}/station/`,
//     TICKETS: `${HOST}/search/`,
//   };
// }
function getProxyUrls(lang) {
  const PORT = process.env.PORT || 5000;
  const {protocol, hostname} = location;
  const BASE = `${protocol}//${hostname}:${PORT}/${lang}`;
  return {
    CITIES: `${BASE}/cities`,
    TICKETS: `${BASE}/tickets`,
  };
}
export const URLS = getProxyUrls;
export const DATABASE_NAME = 'tch_db';
export const DATE_FORMAT_RU = 'DD.MM.YYYY';
export const DATE_FORMAT_EN = 'MM.DD.YYYY';
export const MONITORING_INTERVAL = 1 * 60 * 1000;
// export const MONITORING_INTERVAL = 10 * 60 * 1000;