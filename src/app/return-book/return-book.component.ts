import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../configs/URLLoader';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent extends URLLoader implements OnInit {

  constructor() {
    super()
   }

  ngOnInit(): void {
    super.loadScripts()
  }

}
