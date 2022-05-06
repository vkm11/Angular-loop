import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'For Loop';
  // users = ['Vijay','Prajwal','Kiran','Appu','Nikhil']
  // userDetails = [
  //   {name: 'Vijay', email:'vijay@gmail.com', phone:'0987654321'},
  //   {name: 'Prajwal', email:'prajwal@gmail.com', phone:'5432109876'},
  //   {name: 'Kiran', email:'kiran@gmail.com', phone:'0932187654'},
  //   {name: 'Appu', email:'appu@gmail.com', phone:'0954321876'},
  //   {name: 'Nikhil', email:'nikhil@gmail.com', phone:'0976543281'},
  // ];

  // multidimensional Array or Neated loop
  // title = 'Nested Loop';
  // users =[
  //   {name:'Vijay', phone:'1234', socialAccounts:['facebook','insta','gmail']},
  //   {name:'Anil', phone:'22222',socialAccounts:['Whatsapp','linkedin','sharchat']},
  //   {name:'kumar', phone:'1111',socialAccounts:['Apna','Hirect','jodDrive']},
  // ]

  // Style Binding
  title ='style binding';
  color="red";
  bgColor="green";

  updateColor(){
    this.color="blue"
    this.bgColor="red"
  }

}
