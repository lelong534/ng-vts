/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { QueryList } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { VtsCarouselContentDirective } from '../carousel-content.directive';

import { VtsCarouselBaseStrategy } from './base-strategy';

export class VtsCarouselOpacityStrategy extends VtsCarouselBaseStrategy {
  withCarouselContents(contents: QueryList<VtsCarouselContentDirective> | null, items: number, slideMargin: number): void {
    super.withCarouselContents(contents, items, slideMargin);

    if (this.contents) {
      if (items > 1)
        this.renderer.setStyle(this.slickTrackEl, 'width', `${this.length * 2 * (this.unitWidth + slideMargin)}px`);
      else 
        this.renderer.setStyle(this.slickTrackEl, 'width', `${this.length * (this.unitWidth + slideMargin)}px`);

      this.contents.forEach((content: VtsCarouselContentDirective, i: number) => {
        this.renderer.setStyle(
          content.el,
          'opacity',
          this.carouselComponent!.activeIndex === i ? '1' : '0'
        );
        this.renderer.setStyle(content.el, 'position', 'relative');
        this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, 'left', `${-(this.unitWidth + slideMargin) * i}px`);
        this.renderer.setStyle(content.el, 'transition', [
          'opacity 500ms ease 0s',
          'visibility 500ms ease 0s'
        ]);
      });
    }
  }

  switch(_f: number, _t: number): Observable<void> {
    const { to: t } = this.getFromToInBoundary(_f, _t);
    const complete$ = new Subject<void>();

    this.contents.forEach((content: VtsCarouselContentDirective, i: number) => {
      this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
    });

    setTimeout(() => {
      complete$.next();
      complete$.complete();
    }, this.carouselComponent!.vtsTransitionSpeed);

    return complete$;
  }

  dispose(): void {
    this.contents.forEach((content: VtsCarouselContentDirective) => {
      this.renderer.setStyle(content.el, 'transition', null);
    });

    super.dispose();
  }
}
