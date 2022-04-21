import {Component, Input, OnInit} from '@angular/core';
import {SocialMediaPost} from "../../data/model/SocialMediaPost";

@Component({
  selector: 'app-social-media-post',
  templateUrl: './social-media-post.component.html',
  styleUrls: ['./social-media-post.component.scss']
})
export class SocialMediaPostComponent implements OnInit {

  @Input('post') post?: SocialMediaPost;

  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
  }

}
