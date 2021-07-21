import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotesdetail',
  templateUrl: './quotesdetail.component.html',
  styleUrls: ['./quotesdetail.component.css']
})
export class QuotesdetailComponent implements OnInit {

    
  carol:Quote[]=[
    new Quote("Caroh", "Life is a succession of lessons which must be lived to be understood.", "- Ralph Waldo Emerson"),
    new Quote("Victor", "You can always edit a bad page. You can’t edit a blank page", "- Jodi Picoult"),
    new Quote("Faith", "I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles.", "- Shannon Hale"),

  ]

  carbon(event:any){
    this.carol.push(event);
    
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
