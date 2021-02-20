import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import CategoryMessage from 'src/app/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/main/mocks/CategoryTestService';
import Category from 'src/app/main/models/Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent extends URLLoader implements OnInit {





  model: Category = new Category(0, '')

  constructor(private categoryTestService:
    CategoryTestService,
    private message: CategoryMessage) {
    super()
    this.model = new Category(0, '');
  }


  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {
      this.model = this.categoryTestService.get(idd)
      if (this.model == undefined) {
        this.model = new Category(0, '');
      }
    })
  }

  edit() {
    console.log(this.model)
    this.categoryTestService.update(this.model)

    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }

}
