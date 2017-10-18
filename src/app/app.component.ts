import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingProvider } from './../providers/setting/setting';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = "TabsPage";
  selectedTheme: String;

  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private settings: SettingProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

