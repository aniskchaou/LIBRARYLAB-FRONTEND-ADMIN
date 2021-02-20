import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class BookMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Livre a ete ajouté avec succés',
        'edit': 'Livre a ete modifié avec succés',
        'delete': 'Livre a ete supprimé avec succés'
    }

    validationMessage = {
        'isbn': 'ISBN  est obligatoire.',
        'title': 'Titre est obligatoire.',
        'subtitle': 'Sous-Titre  est obligatoire.',
        'author': 'Auteur est obligatoire.',
        'edition': 'Edition est obligatoire.',
        'edition_year': 'Année edition est obligatoire.',
        'number_of_books': 'Nombre de livre est obligatoire.',
        'photo': ' Photo  est obligatoire.',
        'physical_form': 'Forme physique est obligatoire.',
        'publisher': ' Editeur  est obligatoire.',
        'series': ' Serie est obligatoire.',
        'size': ' Taille  est obligatoire.',
        'price': ' Prix  est obligatoire.',
        'call_no': 'Telephone   est obligatoire.',
        'location': 'Lieu  est obligatoire.',
        'clue_page': 'Page est obligatoire.',
        'editor': 'Editeur est obligatoire.',
        'publishing_year': 'Anne de publication   est obligatoire.',
        'publication_place': 'Lieu de publication   est obligatoire.',
        'number_of_pages': ' Nombre de page  est obligatoire.',
        'source_details': ' Details est obligatoire.',
        'notes': ' Note  est obligatoire.',
        'pdf': ' PDF  est obligatoire.',
        'link': 'Lien   est obligatoire.',
    }

    constructor() {

    }
}