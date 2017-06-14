import {environment} from 'environments/environment';

function getMockUrls() {
  const MOCK_HOST = 'http://localhost:3000';
  return {
    CITIES: `${MOCK_HOST}/cities`
  };
}
function getBookingUrls() {
  const BOOKING_HOST = 'http://booking.uz.gov.ua';
  return {
    CITIES: `${BOOKING_HOST}/cities`
  };
}

export const URLS = environment.mockServer ? getMockUrls() : getBookingUrls();
export const DATE_FORMAT = 'DD/MM/YYYY';