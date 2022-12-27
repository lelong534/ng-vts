import { Component } from '@angular/core';

@Component({
  selector: 'vts-demo-image-thumbnail',
  template: `
    <img
      vts-image
      width="200px"
      height="200px"
      vtsShape="rounded"
      vtsThumbnail
      vtsSrc="https://avatars.githubusercontent.com/u/22736418"
      alt=""
    />
    <img
      vts-image
      width="200px"
      height="200px"
      vtsShape="circle"
      vtsThumbnail
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
export class VtsDemoImageThumbnailComponent {}
