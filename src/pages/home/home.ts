import { SettingProvider } from './../../providers/setting/setting';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('slider') slider: Slides;

  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/img/bg.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/img/slide1.jpeg',
      songs: 4,
      private: false
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/img/bg.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/img/slide2.jpeg',
      songs: 12,
      private: true
    }
  ];
  selectedTheme: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingProvider) {
    // 获取当前主题
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  showSearch() {
    this.navCtrl.push('SearchPage');
  }
  openMap() {
    this.navCtrl.push('MapPage');
  }
  onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    // console.log(currentIndex);
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

