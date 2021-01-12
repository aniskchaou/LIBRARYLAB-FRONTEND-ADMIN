import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../configs/URLLoader';

@Component({
  selector: 'app-configuration-return',
  templateUrl: './configuration-return.component.html',
  styleUrls: ['./configuration-return.component.css']
})
export class ConfigurationReturnComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit(): void {
    super.loadScripts()
  }

}
