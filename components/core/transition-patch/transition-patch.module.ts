/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { VtsTransitionPatchDirective } from './transition-patch.directive';

@NgModule({
  imports: [PlatformModule],
  exports: [VtsTransitionPatchDirective],
  declarations: [VtsTransitionPatchDirective]
})
export class VtsTransitionPatchModule {}
