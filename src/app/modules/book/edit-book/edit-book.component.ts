import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BookMessage from 'src/app/main/messages/BookMessage';
import BookTestService from 'src/app/main/mocks/BookTestService';
import Book from 'src/app/main/models/Book';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent extends URLLoader implements OnInit {

  model: Book = new Book(0, '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')

  constructor(private bookTestService:
    BookTestService,
    private message: BookMessage) {
    super()
    this.model = new Book(0, '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')
  }


  ngOnInit(): void {

    this.bookTestService.ID.subscribe(idd => {
      this.model = this.bookTestService.get(idd)
      if (this.model == undefined) {
        this.model = new Book(0, '', '', '', '', '',
          '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')
      }
    })
  }

  edit() {
    this.bookTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }

}
