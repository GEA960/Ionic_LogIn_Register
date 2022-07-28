import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
  user: any;

  constructor
  (
    private router: Router, 
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public afauth: AngularFireAuth,
    public afs: AngularFirestore

  ) { }

  ngOnInit() {
  }
  async login(){

  if(this.email == ""){
    this.toast('Email cannot be empty', 'danger');
  }else if(this.password==""){
    this.toast('Password cannot be empty', 'danger');
  }else{
    const loading = await this.loadingCtrl.create({});
    loading.present();

    this.afauth.signInWithEmailAndPassword(this.email, this.password).then((data) =>{
      if(!data.user.emailVerified){
        loading.dismiss();
        this.toast('Please verify your email and address', 'warning');
        this.afauth.signOut();
      }else{
        loading.dismiss();
        this.router.navigate(['homepage'])
      }
    })
    .catch(error =>{
      loading.dismiss();
       this.toast(error.message, 'danger')
    })

  }
}

register(){
  this.router.navigate(['register'])
}
async toast(message, status){
  const toast = await this.toastCtrl.create({
    message: message,
    color: status,
    duration: 3000,
    position: 'top'
  });

  toast.present();
}

}