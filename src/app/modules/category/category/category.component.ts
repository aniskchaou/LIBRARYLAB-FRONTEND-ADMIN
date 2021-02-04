import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends URLLoader implements OnInit {



  showsummary: boolean = false
  showgraphic: boolean = false


  constructor() {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

}
