/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VtsOutletModule } from '@ui-vts/ng-vts/core/outlet';
import { VtsIconModule } from '@ui-vts/ng-vts/icon';

import { VtsProgressComponent } from './progress.component';

@NgModule({
  exports: [VtsProgressComponent],
  declarations: [VtsProgressComponent],
  imports: [BidiModule, CommonModule, VtsIconModule, VtsOutletModule]
})
export class VtsProgressModule {}
