import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

  add() {
    super.show('Alerte', 'cette fonctionnalité est en cours de développement.', 'warning')
  }
  reset() {
    super.show('Alerte', 'cette fonctionnalité est en cours de développement.', 'warning')
  }
}
