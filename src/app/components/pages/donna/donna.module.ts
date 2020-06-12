import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DonnaPage } from './donna.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { SharedAccordionModule } from '../../shared-accordion.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    SharedAccordionModule
  ],
  declarations: [DonnaPage],
  entryComponents:[DonnaPage]
})
export class DonnaPageModule {}
