import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupByPipe } from '../core/group-by.pipe';

@NgModule({
  imports: [ CommonModule ],
  providers: [ ],
  declarations: [
    GroupByPipe
  ],
  exports: [
    GroupByPipe,
    CommonModule
  ]
})
export class CoreModule { }
