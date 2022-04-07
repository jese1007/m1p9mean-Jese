import {  Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FonctionService } from "src/app/fonction.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  mdp:String = "";
  email:String = "";
  error_message:String = "";
  fonct: FonctionService ;
  constructor(private foncts: FonctionService, private rooter: Router) {
    this.fonct = foncts;
  }

  ngOnInit(): void {}

  login(){
    const success = response => {
      console.log("diaodij");
      if (response['status'] == 200 && response['data'].length > 0 ) {
        this.rooter.navigate(["/index"]);
      } else {
        this.error_message = 'Erreur connexion';
      }
      console.log(response);
    };

    const error = response => {
      // this.error_message = 'Erreur connexion';
      console.log("error");
      console.log(response);
    };
    this.fonct.login(this.email,this.mdp).subscribe(success,error);
  }
}
