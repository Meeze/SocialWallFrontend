import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "../shared/shared.module";
import {DevModule} from "../dev/dev.module";
import {DataModule} from "../data/data.module";
import {AppRoutingModule} from "./app-routing.module";
import {DevComponent} from "../dev/dev.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    DevModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
