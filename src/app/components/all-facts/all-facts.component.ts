import { Component, OnInit } from '@angular/core';
import { FactsService } from '../../services/facts.service';
import { Fact } from '../../models/fact';

@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.css']
})
export class AllFactsComponent implements OnInit {

  constructor(private factsService:FactsService) { }

  ngOnInit() {
    this.factsService.initService();
    // this.factsService.getAllFacts().subscribe((data) => {
    //   this.allFacts = data['all'];
    //   this.factsService.updateAllFacts(this.allFacts);
    // });
    
  }

}
