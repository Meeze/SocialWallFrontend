import {Component, OnInit} from '@angular/core';
import {SocialMediaPostService} from "../data/service/social-media-post.service";
import {Observable} from "rxjs";
import {SocialMediaPost} from "../data/model/SocialMediaPost";
import {StringFilter} from "../data/model/StringFilter";

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  data?: Observable<SocialMediaPost[]>;

  constructor(private service:SocialMediaPostService) {

  }

  ngOnInit(): void {
    this.data = this.service.getAll({filter: ["DEV"]} as StringFilter);
  }


}
