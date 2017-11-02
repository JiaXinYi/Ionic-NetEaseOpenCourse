import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconfontPage } from './iconfont';

@NgModule({
  declarations: [
    IconfontPage,
  ],
  imports: [
    IonicPageModule.forChild(IconfontPage),
  ],
  exports:[IconfontPage]
})
export class IconfontPageModule {}
