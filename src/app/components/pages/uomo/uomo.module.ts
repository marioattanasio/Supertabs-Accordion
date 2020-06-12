import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UomoPage } from './uomo.page';
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
  declarations: [UomoPage],
  entryComponents:[UomoPage]
})
export class UomoPageModule {}
