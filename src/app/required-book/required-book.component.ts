import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../configs/URLLoader';

@Component({
  selector: 'app-required-book',
  templateUrl: './required-book.component.html',
  styleUrls: ['./required-book.component.css']
})
export class RequiredBookComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit(): void {
    super.loadScripts()
  }

}
