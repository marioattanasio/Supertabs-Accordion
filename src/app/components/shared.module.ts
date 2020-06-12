import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { TabsComponent } from './tabs/tabs.component';
import { UomoPageModule } from './pages/uomo/uomo.module';
import { DonnaPageModule } from './pages/donna/donna.module';
import { AccordionComponent } from './accordion/accordion.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    IonicModule,
    SuperTabsModule, //se eliminato l'app si avvia lo stesso
    UomoPageModule,
    DonnaPageModule

  ],
  exports:[TabsComponent]
})
export class SharedModule { }
