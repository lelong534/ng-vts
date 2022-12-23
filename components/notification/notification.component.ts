/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { notificationMotion } from '@ui-vts/ng-vts/core/animation';
import { VtsMNComponent } from '@ui-vts/ng-vts/message';

import { VtsNotificationData } from './typings';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'vts-notification',
  exportAs: 'vtsNotification',
  preserveWhitespaces: false,
  animations: [notificationMotion],
  template: `
    <div
      class="vts-toast vts-notification-notice-closable"
      [ngStyle]="instance.options?.vtsStyle || null"
      [ngClass]="instance.options?.vtsClass || ''"
      [@notificationMotion]="state"
      (@notificationMotion.done)="animationStateChanged.next($event)"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <ng-container [ngSwitch]="instance.type" *ngIf="!instance.template">
        <vts-alert *ngSwitchCase="'success'" vtsType="success" [vtsMessage]="instance.title" [vtsDescription]="instance.content" vtsShowIcon></vts-alert>
        <vts-alert *ngSwitchCase="'info'" vtsType="info" [vtsMessage]="instance.title" [vtsDescription]="instance.content" vtsShowIcon></vts-alert>
        <vts-alert *ngSwitchCase="'warning'" vtsType="warning" [vtsMessage]="instance.title" [vtsDescription]="instance.content" vtsShowIcon></vts-alert>
        <vts-alert *ngSwitchCase="'error'" vtsType="error" [vtsMessage]="instance.title" [vtsDescription]="instance.content" vtsShowIcon></vts-alert>
      </ng-container>
      <ng-template
        [ngIf]="instance.template"
        [ngTemplateOutlet]="instance.template!"
        [ngTemplateOutletContext]="{
          $implicit: this,
          data: instance.options?.vtsData
        }"
      ></ng-template>
      <a tabindex="0" class="vts-notification-notice-close" (click)="close()">
        <span class="vts-notification-notice-close-x">
          <ng-container *ngIf="instance.options?.vtsCloseIcon; else iconTpl">
            <ng-container *vtsStringTemplateOutlet="instance.options?.vtsCloseIcon; let closeIcon">
              <i vts-icon [vtsType]="closeIcon"></i>
            </ng-container>
          </ng-container>
          <ng-template #iconTpl>
            <i vts-icon vtsType="Close" class="vts-notification-close-icon"></i>
          </ng-template>
        </span>
      </a>
    </div>
  `
})
export class VtsNotificationComponent extends VtsMNComponent implements OnDestroy {
  @Input() instance!: Required<VtsNotificationData>;
  @Input() placement?: string;
  @Input() index!: number;
  @Output() readonly destroyed = new EventEmitter<{
    id: string;
    userAction: boolean;
  }>();

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.instance.onClick.complete();
  }

  onClick(event: MouseEvent): void {
    this.instance.onClick.next(event);
  }

  close(): void {
    this.destroy(true);
  }

  get state(): string | undefined {
    if (this.instance.state === 'enter') {
      if (this.placement === 'topLeft' || this.placement === 'bottomLeft') {
        return 'enterLeft';
      } else {
        return 'enterRight';
      }
    } else {
      return this.instance.state;
    }
  }
}
