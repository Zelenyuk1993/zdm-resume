import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ConnectBtnComponent} from "./connect-btn.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ConnectBtnComponent
  ],
  exports: [
    ConnectBtnComponent
  ]
})
export class ConnectBtnModule {}
