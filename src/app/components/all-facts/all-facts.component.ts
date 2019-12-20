import { Component, OnInit } from '@angular/core';
import { FactsService } from '../../services/facts.service';

@Component({
  selector: 'app-all-facts',
  templateUrl: './all-facts.component.html',
  styleUrls: ['./all-facts.component.css']
})
export class AllFactsComponent implements OnInit {
  allFacts;

  constructor(private factsService:FactsService) { }

  ngOnInit() {
    this.factsService.getAllFacts().subscribe((data) => {
      this.allFacts = data['all'];
    });
    
  }

}
