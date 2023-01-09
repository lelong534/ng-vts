import { Component } from '@angular/core';

@Component({
  selector: 'vts-demo-image-rounded',
  template: `
    <img
      vts-image
      width="200px"
      height="200px"
      vtsShape="square"
      vtsSrc="https://avatars.githubusercontent.com/u/22736418"
      alt=""
    />
    <img
      vts-image
      width="200px"
      height="200px"
      vtsShape="circle"
      vtsSrc="https://avatars.githubusercontent.com/u/50307523"
      alt=""
    />
  `,
  styles: [
    `
      img {
        margin-right: 1rem;
      }
    `
  ]
})
export class VtsDemoImageRoundedComponent {}
