import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import TypeMemberMessage from 'src/app/main/messages/TypeMemberMessage';
import MemberTypeTestService from 'src/app/main/mocks/MemberTypeTestService';
import TypeMember from 'src/app/main/models/TypeMember';

@Component({
  selector: 'app-edit-type-member',
  templateUrl: './edit-type-member.component.html',
  styleUrls: ['./edit-type-member.component.css']
})
export class EditTypeMemberComponent extends URLLoader implements OnInit {

  model: TypeMember = new TypeMember(0, '')

  constructor(private typeMemberTestService:
    MemberTypeTestService,
    private message: TypeMemberMessage) {
    super()
    this.model = new TypeMember(0, '');
  }


  ngOnInit(): void {

    this.typeMemberTestService.ID.subscribe(idd => {
      this.model = this.typeMemberTestService.get(idd)
      console.log(idd)
      if (this.model == undefined) {
        this.model = new TypeMember(0, '');
      }
    })
  }

  edit() {
    this.typeMemberTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }

}
