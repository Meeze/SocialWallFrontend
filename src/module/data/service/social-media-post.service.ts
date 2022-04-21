import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {DataModule} from "../data.module";
import {SocialMediaPost} from "../model/SocialMediaPost";
import {Observable} from "rxjs";
import {StringFilter} from "../model/StringFilter";

@Injectable({
  providedIn: DataModule,
})
export class SocialMediaPostService {

  ENDPOINT = environment.requestUrl + 'social/all'

  constructor(private client: HttpClient) {
  }

  getAll(filter: StringFilter): Observable<SocialMediaPost[]> {
    let params: HttpParams = new HttpParams().set('filter', filter!.filter!.toString());
    return this.client.get<SocialMediaPost[]>(this.ENDPOINT, {params: params});
  }

}
