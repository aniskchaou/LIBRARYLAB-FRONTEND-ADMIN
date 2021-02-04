import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false

  constructor() {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

}
