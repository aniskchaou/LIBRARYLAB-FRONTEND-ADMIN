import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class MemberMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Membre a été ajouté avec succés',
        'edit': 'Membre a été modifié avec succés',
        'delete': 'Membre a été supprimé avec succés'
    }
    validationMessage = {
        'name': 'Nom est obligatoire.',
        'user_type': 'Type utilisateur est obligatoire.',
        'type_id': 'Type est obligatoire.',
        'email': 'Email est obligatoire.',
        'mobile': 'Mobile est obligatoire.',
        'password': 'Mot de passe est obligatoire.',
        'address': 'Adresse est obligatoire.',
        'status': 'Statut est obligatoire.',
    }

    constructor() {

    }
}