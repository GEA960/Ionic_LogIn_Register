import { Component, OnInit } from '@angular/core';
import { PopoverController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage {
  
  
  constructor(public actionSheetCtrl: ActionSheetController) { }

  async showActionSheet() {
    await this.actionSheetCtrl.create({
      header: 'Upload Photo',
      buttons: [
        {
          text: "Take from Gallery",
          handler: () => {
            console.log("Gallery Clicked")
          }
        }, {
          text: "Take Photo on Camera",
          icon: 'camera',
          handler: () => {
            console.log("Camera Clicked")
          }
        },

        {
          text: "Cancel",
          role: "cancel",
        }

      ]
    }).then(res => res.present());

  }
}