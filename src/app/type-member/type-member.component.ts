import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../configs/URLLoader';

@Component({
  selector: 'app-type-member',
  templateUrl: './type-member.component.html',
  styleUrls: ['./type-member.component.css']
})
export class TypeMemberComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}


}
