import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the ClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {

  @ViewChild('slider') slider: Slides;
  color: any;
  colors = ['rgba(34, 19, 19, 0.33)', '#e0e437', '#37e446', '#375be4', '#972cb1'];
  slideindex: any = 1;

  cards = [
    {
      imgsrc: "assets/img/slide2.jpeg",
      span:"马克图文",
      title: "福利 | 王牌特工2华丽回归！",
      content:"不看后悔一整年",
      people:"249"
    },
    {
      imgsrc: "assets/img/slide1.jpeg",
      span:"哔哔",
      title: "人性经得起考验吗？",
      content:"不想看见你丑陋的样子",
      people:"2534"
    },
    {
      imgsrc: "assets/img/slide2.jpeg",
      span:"马克图文",
      title: "重磅！问号君来了！",
      content:"咱们好好说道说道",
      people:"990"
    },
    {
      imgsrc: "assets/img/slide1.jpeg",
      span:"哔哔",
      title: "谁是你生命中最重要的人？",
      content:"都是人生过客，除了你",
      people:"4982"
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = this.colors[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassPage');
  }
  onSlideChanged() {
    const currentIndex = this.slider.getActiveIndex();
    this.color = this.colors[currentIndex];
    this.slideindex = currentIndex + 1;
  }

}
