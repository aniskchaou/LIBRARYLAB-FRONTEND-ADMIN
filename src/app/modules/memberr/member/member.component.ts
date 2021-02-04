import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false

  constructor() {
    super()
  }


  ngOnInit() {
    super.loadScripts();
  }


}
