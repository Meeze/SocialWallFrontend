import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevComponent } from './dev.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    DevComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class DevModule { }
