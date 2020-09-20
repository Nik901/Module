import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public email="";
public password="";

public addlevel2="";
public addlevel3="";
public addname="";
public addisactive="";


constructor(public ang:AngularFirestore,public router:Router,public angauth:AngularFireAuth) { }

  ngOnInit(): void {
  
  }

submit(){
  if(this.email!=="" && this.password!==""){
this.ang.collection('users',ref=>ref.where('email','==',this.email)).get().subscribe(res=>{
console.log(res)

if (res.size>0){
  console.log('done')
  this.router.navigate(['/page1'])
}
else{

 // this.router.navigate(['/page1'])
 
this.signin1()
this.router.navigate(['/page1'])
}
})
}
else{
  console.log('pls enter something')

}

}
signin1(){
  firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(()=>{
  const did=this.ang.createId();
  this.ang.collection('users').doc(did).set({doc_id:did,email:this.email,password:this.password})
  console.log('you are sign in');
})

}

}