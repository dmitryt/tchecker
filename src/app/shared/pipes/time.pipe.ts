import { Pipe, PipeTransform } from '@angular/core';

const MS_IN_SECONDS = 1000
const SECONDS_IN_MINUTES = 60;
const MS_IN_MINUTES = SECONDS_IN_MINUTES * MS_IN_SECONDS;
const MINUTES_IN_HOURS = 60;
const MS_IN_HOURS = MINUTES_IN_HOURS * MS_IN_MINUTES;
const HOURS_IN_DAY = 24;

const leadZero = v => v < 10 ? `0${v}` : v;

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (isNaN(value)) {
      return value;
    }
    const hours = Math.floor(value / MS_IN_HOURS) % HOURS_IN_DAY;
    const minutes = Math.floor(value / MS_IN_MINUTES) % MINUTES_IN_HOURS;
    const seconds = Math.floor(value / MS_IN_SECONDS) % SECONDS_IN_MINUTES;
    return [hours, minutes, seconds].map(leadZero).join(':');
  }

}
