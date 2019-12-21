import { Component, OnInit } from '@angular/core';
import { FactsService } from 'src/app/services/facts.service';
import { Fact } from '../../models/fact';


@Component({
  selector: 'app-my-fatcs',
  templateUrl: './my-fatcs.component.html',
  styleUrls: ['./my-fatcs.component.css']
})
export class MyFatcsComponent implements OnInit {
  myFacts: Fact[];

  constructor(private factsService: FactsService) { }

  ngOnInit() {
    this.factsService.getMyFacts().subscribe((facts: Fact[]) => {
      this.myFacts = facts;
    })
  }

}
