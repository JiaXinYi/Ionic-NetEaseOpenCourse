import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactConsultPage } from './contact-consult';

@NgModule({
  declarations: [
    ContactConsultPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactConsultPage),
  ],
  exports:[ContactConsultPage]
})
export class ContactConsultPageModule {}
