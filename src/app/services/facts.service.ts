import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Fact } from '../models/fact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  factsUrl:string = 'http://localhost:3000/api/facts';
  myFactsUrl: string = 'http://localhost:3000/api/myfacts';
  allFacts: Fact[];
  nextFactIndex;

  constructor(private http:HttpClient) {
    this.nextFactIndex = 0;
   }


  initService(){
    this.http.get(this.factsUrl).subscribe((data) => {
        this.allFacts = data['all'];
      }
    )
  }

  // getAllFacts():Observable<any>{
  //   return this.http.get(this.factsUrl);
  // }

  // updateAllFacts(all){
  //   this.allFacts = all;
  // }

  // getFactsText(){
  //   const texts = this.allFacts.map(fact => fact['text']);
  //   return texts;
  // }

  getNextFact(){
    const fact = this.allFacts[this.nextFactIndex++];
    this.nextFactIndex = this.nextFactIndex % this.allFacts.length;
    return fact;
  }

  getPrevFact(){
    const fact = this.allFacts[this.nextFactIndex--];
    if(this.nextFactIndex < 0 ){
      this.nextFactIndex = this.allFacts.length - 1;
    }
    return fact;
  }

  saveFact(fact: Fact): Observable<any> {
    console.log(fact);
  
    return this.http.post(this.myFactsUrl, fact);

  }

}
