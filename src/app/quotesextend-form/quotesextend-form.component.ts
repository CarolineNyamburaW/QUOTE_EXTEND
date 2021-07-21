import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quotesextend-form',
  templateUrl: './quotesextend-form.component.html',
  styleUrls: ['./quotesextend-form.component.css']
})
export class QuotesextendFormComponent implements OnInit {

  @Output() charles= new EventEmitter();

  submit(me:any, ga:NgForm){
    if(me.yourName=="" || me.date=="" || me.author=="" || me.quote==""){
      alert("Kindly fill the form")
    }else{
      this.charles.emit(me);
      ga.reset()
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
