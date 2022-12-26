import { NgModule, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, AfterContentInit, TemplateRef, QueryList, ContentChildren, Directive } from '@angular/core';

import { VtsButtonModule } from '@ui-vts/ng-vts/button';

@Directive({
    selector: '[vtsTemplate]',
})
export class VtsTemplate {
    @Input() type: string = '';

    @Input('vtstemplate') name: string = '';

    constructor(public template: TemplateRef<any>) {}

    getType(): string {
        return this.name;
    }
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    selector: 'vts-inplace',
    exportAs: 'vtsInplaceComponent',
    // styleUrls: ['./inplace.css'],
    template: `
        <div [ngClass]="{'vts-inplace': true, 'vts-inplace-closable': closable }" [ngStyle]="style" [class]="styleClass">
            <div class="vts-inplace-display" (click)="onActivateClick($event)" (keydown)="onKeydown($event)" [ngClass]="{ 'vts-disabled': disabled }" *ngIf="!active">
                <ng-content select="[vtsInplaceDisplay]"></ng-content>
                <ng-container *ngTemplateOutlet="displayTemplate"></ng-container>
            </div>
            <div class="vts-inplace-content" *ngIf="active">
                <ng-content select="[vtsInplaceContent]"></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                <button vts-button vtsType="secondary" (click)="onDeactivateClick($event)" *ngIf="closable"></button>
            </div>
        </div>
    `,
})
export class VtsInplaceComponent implements AfterContentInit {
    @Input() active: boolean = false;

    @Input() closable: boolean = false;

    @Input() disabled: boolean = true;

    @Input() preventClick: boolean = false;

    @Input() style: any;

    @Input() styleClass: string = '';

    @Input() closeIcon: string = 'close';

    @ContentChildren(VtsTemplate) templates!: QueryList<any>;

    @Output() onActivate: EventEmitter<any> = new EventEmitter();

    @Output() onDeactivate: EventEmitter<any> = new EventEmitter();

    hover: boolean = true;

    displayTemplate: TemplateRef<any> | undefined;

    contentTemplate: TemplateRef<any> | undefined;

    constructor(public cd: ChangeDetectorRef) {}

    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'display':
                    this.displayTemplate = item.template;
                    break;

                case 'content':
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }

    onActivateClick(event: Event | undefined) {
        if (!this.preventClick) this.activate(event);
    }

    onDeactivateClick(event: Event | undefined) {
        if (!this.preventClick) this.deactivate(event);
    }

    activate(event?: Event) {
        if (!this.disabled) {
            this.active = true;
            this.onActivate.emit(event);
            this.cd.markForCheck();
        }
    }

    deactivate(event?: Event) {
        if (!this.disabled) {
            this.active = false;
            this.hover = false;
            this.onDeactivate.emit(event);
            this.cd.markForCheck();
        }
    }

    onKeydown(event: KeyboardEvent) {
        if (event.which === 13) {
            this.activate(event);
            event.preventDefault();
        }
    }
}