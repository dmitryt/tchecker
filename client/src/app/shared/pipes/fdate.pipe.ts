import { Pipe, PipeTransform } from '@angular/core';
import {format} from 'date-fns';

import {DATE_FORMAT_RU} from '../../../config';

@Pipe({
  name: 'fdate'
})
export class FdatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return format(value, DATE_FORMAT_RU);
  }

}
