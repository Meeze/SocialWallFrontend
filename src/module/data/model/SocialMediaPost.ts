import { SocialMediaImage } from "./SocialMediaImage";

export type PLATFORM = 'INSTAGRAM' | 'FACEBOOK'

export interface SocialMediaPost {

  platform: PLATFORM,
  url:string,
  text:string,
  image: SocialMediaImage,
  impressions:number,
  accountName: string,


}
