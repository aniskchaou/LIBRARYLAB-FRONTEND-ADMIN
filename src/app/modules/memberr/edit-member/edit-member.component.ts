import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import MemberMessage from 'src/app/main/messages/MemberMessage';
import MemberTestService from 'src/app/main/mocks/MemberTestService';
import Member from 'src/app/main/models/Member';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent extends URLLoader implements OnInit {

  model: Member = new Member(0, '', '', '', '', '', '', '', '')

  constructor(private categoryTestService:
    MemberTestService,
    private message: MemberMessage) {
    super()
    this.model = new Member(0, '', '', '', '', '', '', '', '');
  }


  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(idd)
      if (this.model == undefined) {
        this.model = new Member(0, '', '', '', '', '', '', '', '');
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }
}
