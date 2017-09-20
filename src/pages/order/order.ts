import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  isClose: boolean = false;
  score: any = {
    star: 0,
    starMap: [
      '不满意',
      '还行',
      '一般',
      '满意',
      '很满意',
    ]
  }
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  chooseStar(e) {
    let star = parseInt(e.target.dataset.index);
    this.score.star = star;
    // console.log(e.target.dataset.index);
    // console.log(this.score.star);
    // console.log(star);
  }


  closeScore() {
    this.isClose = true;
  }
  showSearch() {
    this.navCtrl.push('SearchPage');
  }
  openMap() {
    this.navCtrl.push('MapPage');
  }
  onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    console.log(currentIndex);
  }
}