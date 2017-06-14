import {environment} from 'environments/environment';

function getMockUrls() {
  const MOCK_HOST = 'http://localhost:3000';
  return {
    CITIES: `${MOCK_HOST}/cities`,
    TICKETS: `${MOCK_HOST}/tickets`,
  };
}
function getBookingUrls(lang) {
  const BOOKING_HOST = `http://booking.uz.gov.ua/${lang}/purchase`;
  return {
    CITIES: `${BOOKING_HOST}/station`,
    TICKETS: `${BOOKING_HOST}/search`,
  };
}

export const URLS = environment.mockServer ? getMockUrls : getBookingUrls;
export const DATE_FORMAT = 'DD/MM/YYYY';