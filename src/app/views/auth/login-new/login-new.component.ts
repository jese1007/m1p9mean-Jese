import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {

  mdp:String;
  email:String;
  constructor() {}

  ngOnInit(): void {}

  login(){
    var user = {
      "email":this.email,
      "mdp":this.mdp
    };
    console.log(user);
  }

}
