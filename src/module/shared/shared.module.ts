import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaPostComponent } from './social-media-post/social-media-post.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    SocialMediaPostComponent
  ],
  exports: [
    CommonModule,
    BrowserModule,
    SocialMediaPostComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class SharedModule { }
