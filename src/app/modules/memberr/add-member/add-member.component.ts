import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import MemberMessage from 'src/app/main/messages/MemberMessage';
import MemberTestService from 'src/app/main/mocks/MemberTestService';
import MemberValidation from 'src/app/main/validations/MemberValidation';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent extends URLLoader implements OnInit {

  memberForm: FormGroup
  msg: MemberMessage
  submitted = false


  get f() { return this.memberForm.controls; }

  constructor(private validation: MemberValidation, private message: MemberMessage, private memberTestService: MemberTestService) {
    super()
    this.memberForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.memberForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.memberTestService.create(this.memberForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
