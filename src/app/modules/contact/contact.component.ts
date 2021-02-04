import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';


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
