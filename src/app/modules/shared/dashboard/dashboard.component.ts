import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {

    let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var ctx1 = document.getElementsByClassName("book-chart");
    var ctx2 = document.getElementsByClassName("category-chart");
    this.renderChart(data, labels, ctx1, 'rgb(255, 99, 132)');
    this.renderPie([10, 20, 30], ['Développement personnel.', 'Droit & économie', 'Droit & économie'], ctx2, 'rgba(19, 111, 1, 1)', 'rgba(253, 13, 13, 1)', 'rgb(23, 56, 132)');

    super.show('Library Lab', 'cette application est en cours de développement.', 'info')
  }


  renderChart(data, labels, ctx, color) {


    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: data,
          backgroundColor: color,
          borderColor: color,
        }]
      },
    });
  }

  renderPie(data, labels, ctx, color1, color2, color3) {
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: data,
          backgroundColor: [color1, color2, color3],
          borderColor: 'white',
        }]
      },
    })
  }
}
