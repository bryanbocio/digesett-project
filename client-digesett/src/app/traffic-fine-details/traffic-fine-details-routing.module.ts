import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrafficFineDetailsPage } from './traffic-fine-details.page';

const routes: Routes = [
  {
    path: '',
    component: TrafficFineDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrafficFineDetailsPageRoutingModule {}
