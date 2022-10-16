import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrafficFineDetailsPageRoutingModule } from './traffic-fine-details-routing.module';

import { TrafficFineDetailsPage } from './traffic-fine-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrafficFineDetailsPageRoutingModule
  ],
  declarations: [TrafficFineDetailsPage]
})
export class TrafficFineDetailsPageModule {}
