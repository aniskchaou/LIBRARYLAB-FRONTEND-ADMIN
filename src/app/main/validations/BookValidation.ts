
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class BookValidation {
    formGroup: FormGroup;

    public get formGroupInstance(): FormGroup {
        return this.formGroup;
    }

    constructor() {
        this.formGroup = this.createFormGroup()
    }

    public checkValidation() {

        if (this.formGroup.invalid) {
            return false;
        }
        return true;
    }
    createFormGroup() {
        return new FormGroup({

            isbn: new FormControl('', Validators.required),
            title: new FormControl('', Validators.required),
            subtitle: new FormControl('', Validators.required),
            author: new FormControl('', Validators.required),
            edition: new FormControl('', Validators.required),
            edition_year: new FormControl('', Validators.required),
            number_of_books: new FormControl('', Validators.required),
            photo: new FormControl('', Validators.required),
            physical_form: new FormControl('', Validators.required),
            publisher: new FormControl('', Validators.required),
            series: new FormControl('', Validators.required),
            size: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
            call_no: new FormControl('', Validators.required),
            location: new FormControl('', Validators.required),
            clue_page: new FormControl('', Validators.required),
            editor: new FormControl('', Validators.required),
            publishing_year: new FormControl('', Validators.required),
            publication_place: new FormControl('', Validators.required),
            number_of_pages: new FormControl('', Validators.required),
            source_details: new FormControl('', Validators.required),
            notes: new FormControl('', Validators.required),
            pdf: new FormControl('', Validators.required),
            link: new FormControl('', Validators.required),
           

        })
    }
}
