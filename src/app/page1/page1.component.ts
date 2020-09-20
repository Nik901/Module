import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  public show:boolean = true;
  public show2:boolean = false;
  public nm="";
public price="";
public quantity="";
public amt="";
public nm1="";
public price1="";
public quantity1="";
public amt1="";
public l:any[];
public items: any[];

public edittxt="";

  constructor(private ang: AngularFirestore,public t:AngularFireAuth) { }

  ngOnInit(): void {
    this.ang.collection('product').valueChanges().subscribe(res=>{
      this.items=res;
     
    })
  }
  
  calc(){
    const newid = this.ang.createId();
    this.ang.collection('product').doc(newid).set({doc_id:newid,name:this.nm,price:this.price,quantity:this.quantity,total:this.amt})
  }
  
  edit1()
  {

  this.ang.collection('product',ref=>ref.where('name','==',this.edittxt)).valueChanges().subscribe(res=>{
let p:any[];
p=res;
  let k=(p[0].doc_id)
   this.ang.collection("product").doc(k).update({
    name:"pen"
   })
    })



  }

  delete1(){
  // let p= this.ang.collection('product',ref=>ref.where('name','==',this.edittxt)).valueChanges().subscribe(res=>{
    //  this.items=res;
      //console.log(this.items)
    //})
    this.ang.collection('product',ref=>ref.where('name','==',this.edittxt)).valueChanges().subscribe(res=>{
      let p:any[];
      p=res;
        let k=(p[0].doc_id)

  this.ang.collection('product').doc(k).delete().then(function() {
      console.log("Document successfully deleted!");
  })
})
  }
  


  delete(){
    this.ang.collection('product',ref=>ref.where('product_name','==','this.name')).valueChanges().subscribe(ref=>{
      let p:any[];
      p = ref;
        let k=(p[0].doc_id);
 
      this.ang.collection('product').doc(k).delete().then(function(){
        console.log("document deleted");
      })
  })
  
}

}
