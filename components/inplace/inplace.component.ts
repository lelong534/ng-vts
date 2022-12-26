import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, AfterContentInit, TemplateRef, QueryList, ContentChildren, Directive } from '@angular/core';


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
        <div [ngClass]="{'vts-inplace': true }" [ngStyle]="style" [class]="styleClass">
            <div class="vts-inplace-display" (click)="onActivateClick($event)" (keydown)="onKeydown($event)" *ngIf="!active">
                <ng-content select="[vtsInplaceDisplay]"></ng-content>
                <ng-container *ngTemplateOutlet="displayTemplate"></ng-container>
            </div>
            <div class="vts-inplace-content" *ngIf="active">
                <ng-content select="[vtsInplaceContent]"></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                <button vts-button vtsType="primary" (click)="onDeactivateClick($event)" *ngIf="closable"><i vts-icon vtsType="Close"></i></button>
            </div>
        </div>
    `,
})
export class VtsInplaceComponent implements AfterContentInit {
    @Input() active: boolean = false;

    @Input() closable: boolean = true;

    @Input() disabled: boolean = true;

    @Input() preventClick: boolean = false;

    @Input() style: any;

    @Input() styleClass: string = '';

    @ContentChildren(VtsTemplate) templates!: QueryList<any>;

    @Output() onActivate: EventEmitter<any> = new EventEmitter();

    @Output() onDeactivate: EventEmitter<any> = new EventEmitter();

    hover: boolean = true;

    displayTemplate: TemplateRef<any> | null = null;

    contentTemplate: TemplateRef<any> | null = null;

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
        if (event.key === 'ENTER') {
            this.activate(event);
            event.preventDefault();
        }
    }
}