import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdCampaignComponent} from './ad-campaign/ad-campaign.component';
import {AdCampaignStartComponent} from './ad-campaign/ad-campaign-start/ad-campaign-start.component';
import {CreateCampaignComponent} from './ad-campaign/create-campaign/create-campaign.component';
import {FetchCampaignComponent} from './ad-campaign/fetch-campaign/fetch-campaign.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/ad-campaign', pathMatch: 'full' },
  { path: 'ad-campaign', component: AdCampaignComponent, children: [
    { path: '', component: AdCampaignStartComponent },
    { path: 'create', component: CreateCampaignComponent },
    { path: 'fetch', component: FetchCampaignComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
