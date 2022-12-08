/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Pipe, PipeTransform } from '@angular/core';
import { timeUnits } from '@ui-vts/ng-vts/core/time';
import { padStart } from '@ui-vts/ng-vts/core/util';

@Pipe({
  name: 'vtsTimeRange',
  pure: true
})
export class VtsTimeRangePipe implements PipeTransform {
  transform(value: string | number, format: string = 'HH:mm:ss'): string {
    let duration = Number(value || 0);

    return timeUnits.reduce((current, [name, unit]) => {
      if (current.indexOf(name) !== -1) {
        const v = Math.floor(duration / unit);
        duration -= v * unit;
        return current.replace(new RegExp(`${name}+`, 'g'), (match: string) => {
          return padStart(v.toString(), match.length, '0');
        });
      }
      return current;
    }, format);
  }
}
