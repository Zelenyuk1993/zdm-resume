import { NgModule } from '@angular/core';
import {DonateComponent} from "./donate.component";
import {CommonModule} from "@angular/common";

  @NgModule({
    imports: [
      CommonModule,
    ],
    declarations: [
      DonateComponent
    ],
    exports: [
      DonateComponent
    ]
  })
export class DonateModule {

}
