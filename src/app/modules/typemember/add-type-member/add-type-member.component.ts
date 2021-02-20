import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import TypeMemberMessage from 'src/app/main/messages/TypeMemberMessage';
import MemberTypeTestService from 'src/app/main/mocks/MemberTypeTestService';
import TypeMemberValidation from 'src/app/main/validations/TypeMemberValidation';

@Component({
  selector: 'app-add-type-member',
  templateUrl: './add-type-member.component.html',
  styleUrls: ['./add-type-member.component.css']
})
export class AddTypeMemberComponent extends URLLoader implements OnInit {

  typeMemberForm: FormGroup
  msg: TypeMemberMessage
  submitted = false


  get f() { return this.typeMemberForm.controls; }

  constructor(private validation: TypeMemberValidation, private message: TypeMemberMessage,
    private typeMemberTestService: MemberTypeTestService) {
    super()
    this.typeMemberForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.typeMemberForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.typeMemberTestService.create(this.typeMemberForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }
}
