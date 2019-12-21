import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.css']
})
export class FactCardComponent implements OnInit {
  @Input() text: string;
  imgNumber: number ;
  imgName: string ;
  imgCount: number;

  constructor() {
    this.imgNumber = 1;
    this.imgName = `cat${this.imgNumber}.jpg`;
    this.imgCount = 10;
   }

  ngOnInit() {
  }

  nextImage(){
    this.imgNumber = (this.imgNumber + 1) % this.imgCount;
    this.imgName = `cat${this.imgNumber}.jpg`;
    console.log(this.imgNumber);
  }

  prevImage(){
    this.imgNumber--;
    if(this.imgNumber < 0 ){
      this.imgNumber = this.imgCount - 1;
    }
    this.imgName = `cat${this.imgNumber}.jpg`;
    console.log(this.imgNumber);
  }

}
