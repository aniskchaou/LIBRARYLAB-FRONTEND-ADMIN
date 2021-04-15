import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-book',
  templateUrl: './statistics-book.component.html',
  styleUrls: ['./statistics-book.component.css']
})
export class StatisticsBookComponent implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
