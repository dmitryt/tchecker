import {environment} from 'environments/environment';

function getMockUrls() {
  const MOCK_HOST = 'http://localhost:3000';
  return {
    CITIES: `${MOCK_HOST}/cities`,
    TICKETS: `${MOCK_HOST}/tickets`,
  };
}
function getBookingUrls(lang) {
  const BOOKING_HOST = `http://localhost:3000/${lang}`;
  return {
    CITIES: `${BOOKING_HOST}/cities`,
    TICKETS: `${BOOKING_HOST}/tickets`,
  };
}

export const URLS = environment.mockServer ? getMockUrls : getBookingUrls;
export const DATABASE_NAME = 'tch_db';
export const DATE_FORMAT_RU = 'DD.MM.YYYY';
export const DATE_FORMAT_EN = 'MM.DD.YYYY';
export const MONITORING_INTERVAL = 10 * 60 * 1000;