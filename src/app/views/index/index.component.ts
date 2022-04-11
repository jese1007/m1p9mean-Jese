import { FonctionService } from 'src/app/fonction.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit {
  dataPlats: Array<any>=[];
  dataPanier: Array<any>=[];
  dataResto: Array<any>;
  fonct: FonctionService;
  error_message: String;
  commande:any;
  idResto:any;
  count: any;


  constructor(private foncts: FonctionService) {
    this.fonct = foncts;
  }

  ngOnInit(): void {
    const success = response => {
      console.log("diaodij");
      if (response['status'] == 200 && response['data'].length > 0) {
        this.dataResto = response['data'];
        // this.commande['idResto'] = this.dataResto[0]._id;
        this.findPlats(this.dataResto[0]._id);
      } else {
        this.error_message = 'Erreur connexion';
      }
      console.log(this.dataResto);
    };

    const error = response => {
      this.error_message = response;
      console.log("error");
      console.log(response);
    };
    this.foncts.findResto().subscribe(success, error);
  }

  choixResto(){
    this.findPlats(this.idResto);
  }

  findPlats(id) {
    const success = response => {
      console.log("diaodij");
      if (response['status'] == 200 && response['data'].length > 0) {
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
    this.foncts.findPlats(id).subscribe(success, error);
  }

  findResto() {
    const success = response => {
      console.log("diaodij");
      if (response['status'] == 200 && response['data'].length > 0) {
        this.dataResto = response['data'];
        this.findPlats(this.dataResto[0]._id);
      } else {
        this.error_message = 'Erreur connexion';
      }
      console.log(this.dataResto);
    };

    const error = response => {
      this.error_message = response;
      console.log("error");
      console.log(response);
    };
    this.foncts.findResto().subscribe(success, error);
  }

  OpenModal() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  CloseModal(){
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
  }

  addPanier(plat){
    plat['nombre'] = 1;
    this.dataPanier.push(plat);

  }
}
