import { Component, OnInit, Input } from '@angular/core';
import { FactsService } from '../../services/facts.service';
import { Fact } from 'src/app/models/fact';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

/*
  This component is currently used to implement the carousel functionality,
  In the future I will wrap this fact-card component with a "carousel-component"
  which be in charge of the carousel functionality
*/

@Component({
  selector: 'app-fact-card',
  templateUrl: './fact-card.component.html',
  styleUrls: ['./fact-card.component.css']
})
export class FactCardComponent implements OnInit {
  @Input() text: string;
  fact: Fact;
  imgNumber: number ;
  imgName: string ;
  imgCount: number;

  constructor(private factsService: FactsService , iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.imgNumber = 1;
    this.imgName = `cat${this.imgNumber}.jpg`;
    this.imgCount = 10;
    this.fact = factsService.getNextFact();
    
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/icons/thumbs-up.svg'));

   }

  ngOnInit() {
  }

  next(){
    console.log("next clicked");
    this.nextFact();
    this.nextImage();
  }

  prev(){
    console.log("prev clicked");
    this.prevFact();
    this.prevImage();
  }

  save(){
    this.factsService.saveFact(this.fact).subscribe((ack) => {
      console.log(ack);
      alert("fact added to My-Facts");
    });
  }

  nextFact(){
    this.fact = this.factsService.getNextFact();
  }

  prevFact(){
    this.fact = this.factsService.getPrevFact();
  }

  nextImage(){
    this.imgNumber = (this.imgNumber + 1) % this.imgCount;
    this.imgName = `cat${this.imgNumber}.jpg`;
  }

  prevImage(){
    this.imgNumber--;
    if(this.imgNumber < 0 ){
      this.imgNumber = this.imgCount - 1;
    }
    this.imgName = `cat${this.imgNumber}.jpg`;
  }

}
