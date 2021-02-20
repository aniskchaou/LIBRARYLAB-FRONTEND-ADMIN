import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class CategoryMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Categorie a èté ajouté avec succés',
        'edit': 'Categorie a èté modifié avec succés',
        'delete': 'Categorie a èté supprimé avec succés'
    }
    validationMessage = {
        'category_name': 'Nom de categorie est obligatoire',

    }

    constructor() {

    }
}