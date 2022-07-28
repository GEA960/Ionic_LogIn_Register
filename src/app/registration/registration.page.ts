import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  username: string = "";
  email: string = "";
  password: string = "";
  rpassword: string = "";

  constructor
  (
    private router: Router, 
    public toastCtrl: ToastController, 
    public navCtrl: NavController,
    public  loadingCtrl: LoadingController,
    public afs: AngularFirestore,
    public afauth: AngularFireAuth

  ) { }

  async register(){
    if(this.username == ""){
    this.toast('Username cannot be empty', 'danger')

  }else if(this.bdate==""){
    this.toast('Birthdate cannot be empty', 'danger')

  }else if(this.gender==""){
    this.toast('Gender cannot be empty', 'danger')

  }else if(this.email==""){
    this.toast('Email cannot be empty', 'danger')

  }else if(this.password==""){
    this.toast('Password cannot be empty', 'danger')

  }else if(this.password.length < 6){
    this.toast('Password must be at least 6 characters', 'danger');
  
  }else if(this.password != this.rpassword){
    this.toast("Paswords don't match", 'danger')

  }else{
    const loading = await this.loadingCtrl.create({
      duration: 3000
    });
    loading.present();

    this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {
      data.user.sendEmailVerification();
      this.afs.collection('user').doc(data.user.uid).set({
        'userId': data.user.uid,
        'userName': this.username,
        'userBdate': this.bdate,
        'userGender': this.gender,
        'userEmail': this.email
      })
      .then(() => {
        this.toast('Check your email for verification', 'success')
        this.router.navigate(['login']);
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    })
    .catch(error => {
      loading.dismiss()
      this.toast(error.message, 'danger')
    })
  }
}

  login(){
    this.router.navigate(['login'])
  }

  ngOnInit() {
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