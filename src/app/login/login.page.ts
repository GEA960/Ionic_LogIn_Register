import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private router: Router, public toastCtrl: ToastController, public navCtrl: NavController, public loadingCtrl: LoadingController) { }

  async login(){
      if(this.email == ""){
      const toast = this.toastCtrl.create({
        message: 'Email cannot be empty',
        duration: 3000
      });
      (await toast).present();
    }else if(this.password==""){
      const toast = this.toastCtrl.create({
        message: 'Password cannot be empty',
        duration: 3000
      });
      (await toast).present();
    }else{
      this.router.navigate(['homepage'])
    }
  }

  register(){
    this.router.navigate(['register'])
  }

  forgot(){
    this.router.navigate(['forgot'])
  }

  ngOnInit() {
  }

}
