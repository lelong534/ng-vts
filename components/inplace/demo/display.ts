import { Component } from '@angular/core';

@Component({
  selector: 'vts-demo-inplace-display',
  template: `
    <h5>Image</h5>
    <vts-inplace [disabled]="false">
      <div vtsInplaceDisplay>
        Show Image
      </div>
      <div vtsInplaceContent>
        <img src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTQKSKVyESbPlXtw51d39QIZGu3ZpL69V5zSaJLFW8jcr3_eVrEbgfD9ycB0T9h8eVT-AIkOT5HbUzaJCONvnE">
      </div>
    </vts-inplace>
    <h5 style="padding-top: 5px;">Table</h5>
    <vts-inplace [disabled]="false">
      <div vtsInplaceDisplay>
        Show Table
      </div>
      <div vtsInplaceContent>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </div>
    </vts-inplace>
  `,
})
export class VtsDemoInplaceDisplayComponent {}
