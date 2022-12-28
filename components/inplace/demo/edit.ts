import { Component } from '@angular/core';

@Component({
  selector: 'vts-demo-inplace-edit',
  template: `
    <h5>Basic</h5>
    <div style="display: flex;">
      <div style="padding-right: 10px;">
        <vts-inplace [disabled]="false">
        <div vtsInplaceDisplay>
          Click to edit
        </div>
        <div vtsInplaceContent>
          <input type="text" value="VtsInplace" style="height: 32px; border-radius: 5px">
        </div>
      </vts-inplace>
      </div>
      <div>
        <vts-inplace [disabled]="true">
        <div vtsInplaceDisplay>
          Click to edit (disabled)
        </div>
        <div vtsInplaceContent>
          <input type="text" value="VtsInplace" style="height: 32px; border-radius: 5px">
        </div>
      </vts-inplace>
      </div>
    </div>
    
  `,
})
export class VtsDemoInplaceEditComponent {}
