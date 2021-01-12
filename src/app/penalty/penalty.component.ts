import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../configs/URLLoader';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent extends URLLoader implements OnInit {

  constructor() {
     super()
   }

  ngOnInit(): void {
    super.loadScripts()
  }

}
