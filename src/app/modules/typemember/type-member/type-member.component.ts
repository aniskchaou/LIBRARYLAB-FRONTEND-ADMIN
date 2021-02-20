import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import MemberTypeMessage from 'src/app/main/messages/TypeMemberMessage';
import MemberTypeTestService from 'src/app/main/mocks/MemberTypeTestService';

@Component({
  selector: 'app-type-member',
  templateUrl: './type-member.component.html',
  styleUrls: ['./type-member.component.css']
})
export class TypeMemberComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  typeMembers$
  id = 0


  constructor(private typeMemberTestService: MemberTypeTestService, private messageService: MemberTypeMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.typeMemberTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.typeMemberTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.typeMembers$ = this.typeMemberTestService.getAll()

  }

}
