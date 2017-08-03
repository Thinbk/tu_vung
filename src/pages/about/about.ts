import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  mInput: string = "";
  constructor(public mDataProvider: DataProvider, public navCtrl: NavController) {

  }

  onClickAddNote() {
    console.log(this.mInput);

    this.mDataProvider.addNote(this.mInput);
  }

}
