import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  firstname: string = "";
  lastname: string = "";
  gender: string = "";
  address: string = "";
  status: string = "";
  religion: string = "";
  bdate: any = "";
  email: string = "";
  password: string = "";
  rpassword: string = "";

  constructor(private router: Router, public toastCtrl: ToastController, public navCtrl: NavController) { }

  async register(){
    if(this.firstname == ""){
    const toast = this.toastCtrl.create({
      message: 'firstname cannot be empty',
      duration: 3000
    });
    (await toast).present();
    }else if(this.lastname==""){
      const toast = this.toastCtrl.create({
        message: 'lastname cannot be empty',
        duration: 3000
      });
      (await toast).present();
    }else if(this.address==""){
    const toast = this.toastCtrl.create({
      message: 'address cannot be empty',
      duration: 3000
    });
    (await toast).present();
  
  }else if(this.status==""){
    const toast = this.toastCtrl.create({
      message: 'Status cannot be empty',
      duration: 3000
    });
    (await toast).present();
  }else if(this.religion==""){
    const toast = this.toastCtrl.create({
      message: 'Religion cannot be empty',
      duration: 3000
    });
    (await toast).present();
  }else if(this.bdate==""){
    const toast = this.toastCtrl.create({
      message: 'Birthdate cannot be empty',
      duration: 3000
    });
    (await toast).present();
  }else if(this.email==""){
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
  }else if(this.password != this.rpassword){
    const toast = this.toastCtrl.create({
      message: 'Passwords dont match',
      duration: 3000
    });
    (await toast).present();
  }else{
    this.router.navigate(['homepage'])
  }
}

  login(){
    this.router.navigate(['login'])
  }

  ngOnInit() {
  }

}