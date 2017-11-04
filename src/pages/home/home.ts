import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64Image;

  constructor(public navCtrl: NavController,
              private camera: Camera) {

  }

  getImage() {
    this.camera.getPicture().then((imageData) => {
      this.base64Image = "data:image/gif;base64," + imageData;
    });
  }
}
