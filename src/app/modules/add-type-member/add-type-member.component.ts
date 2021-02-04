import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-type-member',
  templateUrl: './add-type-member.component.html',
  styleUrls: ['./add-type-member.component.css']
})
export class AddTypeMemberComponent extends URLLoader implements OnInit {

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
