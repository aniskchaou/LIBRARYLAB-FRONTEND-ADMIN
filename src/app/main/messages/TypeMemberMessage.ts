import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class MemberTypeMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Type de membre a été ajouté avec succés',
        'edit': 'Type de membre a été modifié avec succés',
        'delete': 'Type de membre a été supprimé avec succés'
    }
    validationMessage = {
        'member_type_name': 'Type de membre est obligatoire',
    }

    constructor() {

    }
}