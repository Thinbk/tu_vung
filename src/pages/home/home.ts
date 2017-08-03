import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public mDataProvider: DataProvider, public navCtrl: NavController) {
    this.platform.ready().then(
      () => {
        this.onPlatformReady();
      }
    );
  }

  onPlatformReady() {
    this.mDataProvider.loadData();

  }

  onClickSaveData(){
    this.mDataProvider.saveData();
  }
}
