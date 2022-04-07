import { FonctionService } from 'src/app/fonction.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit {
  dataPlats:[];
  dataPanier:[];
  fonct: FonctionService;
  error_message:String;
  constructor(private foncts: FonctionService) {
    this.fonct=foncts;
  }

  ngOnInit(): void {
    const success = response => {
      console.log("diaodij");
      if (response['status'] == 200 && response['data'].length > 0 ) {
        this.dataPlats = response['data'];
      } else {
        this.error_message = 'Erreur connexion';
      }
      console.log(this.dataPlats);
    };

    const error = response => {
      this.error_message = response;
      console.log("error");
      console.log(response);
    };
    this.foncts.findPlats().subscribe(success,error);
  }

  findPlats(){
    const success = response => {
      console.log("diaodij");
      if (response['status'] == 200 && response['data'].length > 0 ) {
        this.dataPlats = response['data'];
      } else {
        this.error_message = 'Erreur connexion';
      }
      console.log(this.dataPlats);
    };

    const error = response => {
      this.error_message = response;
      console.log("error");
      console.log(response);
    };
    this.foncts.findPlats().subscribe(success,error);
  }
}
