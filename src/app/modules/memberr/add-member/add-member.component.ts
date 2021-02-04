import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent extends URLLoader implements OnInit {

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
