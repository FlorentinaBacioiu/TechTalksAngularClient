import { Component, OnInit } from '@angular/core';
import { Talk } from '../_models/talk';
import { TalkService } from '../_services/talk.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Talk[];

  constructor(private _talkService: TalkService) { }

  ngOnInit() {
    this._talkService.getTalks()
    .subscribe(x => {
      this.talks = x;
    });
  }

  getTalks(){ 
    return this._talkService.getTalks().subscribe(response => {
      console.log('response', response);
    }, error => {
      console.log('error', error);
    });
  }


}
