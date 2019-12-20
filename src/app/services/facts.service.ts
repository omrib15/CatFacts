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

  getAllFacts():Observable<any>{
    return this.http.get(this.factsUrl)
  }

  getFactsText(){
    const texts = this.allFacts.map(fact => fact['text']);
    return texts;
  }

}
