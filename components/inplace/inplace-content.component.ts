import { Component } from "@angular/core";

@Component({
    selector: 'vts-inplace-content',
    exportAs: 'vtsInpaceContent',
    template: '<ng-content></ng-content>',
})
export class VtsInplaceContentComponent {}