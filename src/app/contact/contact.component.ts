import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../configs/URLLoader';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends URLLoader implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

}
