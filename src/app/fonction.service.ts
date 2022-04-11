import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FonctionService {
  url= "https://m1p9mean-jese.herokuapp.com/api";
  // url= "http://localhost:3000/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",

    } )
  }
  headers = new HttpHeaders({
    "Accept": "application/json",
      "Content-Type": "application/json"
  });
  constructor(private http: HttpClient) { }

  login(email:String ,mdp:String){
    var users = {
      email : email,
      mdp : mdp
    };
    const body = JSON.stringify(users);

    return this.http.post(this.url+"/users/login",body,{headers : this.headers,responseType:"json"});
  }

  findResto(){
    return this.http.get(this.url+"/resto",{headers : this.headers,responseType:"json"});
  }
  findPlats(id:any){
    return this.http.get(this.url+"/resto/"+id ,{headers : this.headers,responseType:"json"});
  }
}


