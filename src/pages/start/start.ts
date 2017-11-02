import { SettingProvider } from './../../providers/setting/setting';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  selectedTheme: String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private settings: SettingProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }
  goNetEase() {
    this.navCtrl.push('TabsPage');
  }
  goVideo() {
    this.navCtrl.push('VideoPage');
  }
  goMap() {
    this.navCtrl.push('MapPage');
  }
  goTalk() {
    this.navCtrl.push('ContactConsultPage');
  }
  goIconFont(){
    this.navCtrl.push('IconfontPage')
  }
  changeTheme() {
    if (this.selectedTheme === 'dark-theme') {
      //改变
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }
}
