import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BookMessage from 'src/app/main/messages/BookMessage';
import BookTestService from 'src/app/main/mocks/BookTestService';
import BookValidation from 'src/app/main/validations/BookValidation';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent extends URLLoader implements OnInit {

  bookForm: FormGroup
  msg: BookMessage
  submitted = false


  get f() { return this.bookForm.controls; }

  constructor(private validation: BookValidation, private message: BookMessage,
    private bookTestService: BookTestService) {
    super()
    this.bookForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.bookForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.bookTestService.create(this.bookForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }
}
