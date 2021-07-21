import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input()
  upvoteth:number = 0;
  downvoteth:number = 0;

  likesth(){
    this.upvoteth ++
  }

  dislikesth(){
    this.downvoteth ++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
