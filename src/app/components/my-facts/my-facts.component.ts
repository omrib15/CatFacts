import { Component, OnInit } from '@angular/core';
import { FactsService } from 'src/app/services/facts.service';
import { Fact } from '../../models/fact';


@Component({
  selector: 'app-my-facts',
  templateUrl: './my-facts.component.html',
  styleUrls: ['./my-facts.component.css']
})
export class MyFactsComponent implements OnInit {
  myFacts: Fact[];

  constructor(private factsService: FactsService) { }

  ngOnInit() {
    this.factsService.getMyFacts().subscribe((data) => {
      this.myFacts = data['all'];
    })
  }

}