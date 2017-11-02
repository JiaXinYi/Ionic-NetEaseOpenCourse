import { FormControl, FormBuilder } from '@angular/forms'
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ContactConsultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-consult',
  templateUrl: 'contact-consult.html',
})
export class ContactConsultPage {
  toUs = {
    _id: '0001',
    pic: 'assets/img/logo2.jpg',
    username: '客服'

  }
  user = {
    _id: '0032',
    pic: 'assets/icon/favicon.ico',
    username: '我'
  }

  @ViewChild(Content) content: Content;

  public messages: any = [
    {
      userId: this.toUs._id,
      pic: 'assets/img/logo2.jpg',
      text: '您好，请问有什么可以帮助您的呢？'
    }
  ];
  public messageForm: any;
  chatBox: any;

  reply: Observable<any>;
  myreply: any = {};

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public http: Http
  ) {
    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });
    this.chatBox = '';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad User');
  }
  send(message) {
    if (message && message !== ' ') {
      const messageData = {
        userId: this.user._id,
        pic: 'assets/icon/favicon.ico',
        text: message
      };
      this.messages.push(messageData);
      this.scrollToBottom();

      // this.films = this.http.get('http://swapi.co/api/films');
      // this.films
      // .map(res => res.json())
      // .subscribe(data => {
      //   console.log('my data: ', data);
      // })
      this.reply = this.http.get(`http://www.tuling123.com/openapi/api?key=201a1ff221b94a03aea7fe6ce525ad6b&info=${messageData.text}`);

      this.reply
        .map(res => res.json())
        .subscribe(data => {
          this.myreply.text = data.text;
          console.log(this);
        })
      setTimeout(() => {
        var replyData = {
          userId: this.toUs._id,
          pic: 'assets/img/logo2.jpg',
          text: this.myreply.text          
        };
        this.messages.push(replyData);
        this.scrollToBottom();
      }, 1000);
    }
    this.chatBox = '';
  }
  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }
 
}
