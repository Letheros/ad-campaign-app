import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable';

import { Campaign } from '../shared/campaign.model';

// @NgModule({
//   imports: [
//     BrowserModule,
//     HttpModule
//   ]
// })

@Injectable()
export class CampaignDataService {
  campaigns: Campaign[] = [];
  private getUrl = 'http://192.168.1.11:8080/campaigns';
    // 'https://ad-campaign-c627a.firebaseio.com/data.json';
   // 'http://localhost:4200/api';
  constructor(private http: Http) {
  }
  requireCampaignData() {
    return this.http.get(this.getUrl + '')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const campaign of data) {
            campaign.name = 'FETCHED_USER_' + campaign.id;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong: ' + error);
        }
      );
  }
  requireCampaignDataByID(id: number) {
    // if (!id) return 'Wrong id input';
    return this.http.get(this.getUrl + id)
      .map(
        (response: Response) => {
          const data = response.json();
          for (const campaign of data) {
            campaign.name = 'FETCHED_USER_' + campaign.id;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong: ' + error);
        }
      );
  }
  storeCampaign(newCampaign: Campaign) {
    const headers = new Headers({'Content-type': 'application/json'});
    return this.http.post(this.getUrl, newCampaign, { headers: headers });
  }
  getCampaign() {
    this.requireCampaignData()
      .subscribe(
        (campaigns: any[]) => {
          this.campaigns = campaigns;
          console.log(campaigns);
        },
        (error) => {
          console.log(error);
        }
      );
    return this.campaigns.slice();
  }
  addCampaign(campaign: Campaign) {
    this.storeCampaign(campaign);
  }

}
