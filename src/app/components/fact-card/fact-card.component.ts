import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.css']
})
export class FactCardComponent implements OnInit {
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
