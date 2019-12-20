import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  factsUrl:string = 'http://localhost:3000/api/facts';
  allFacts;

  constructor(private http:HttpClient) { }

  initFacts(){
    this.http.get(this.factsUrl).subscribe(facts => {
      this.allFacts = facts['all'];
      console.log('allFacts',this.allFacts);
    });
  }

  getFactsText(){
    
  }

}
