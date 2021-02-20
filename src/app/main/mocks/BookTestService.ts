import { Injectable } from "@angular/core";
import Service from "../interfaces/Service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export default class BookTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _book = []
    static id = 0

    public getAll() {
        return this._book;
    }

    public get(id) {
        return this._book.find(item => item.id === parseInt(id));
    };

    public create(data) {
        BookTestService.id++
        data["id"] = BookTestService.id
        this._book.push(data);
    };

    public update(data) {

        var foundIndex = this._book.findIndex(item => item.id === data.id);
        this._book[foundIndex] = data;
    };

    public remove(id) {

        var index = this._book.findIndex(item => item.id === id);
        if (index != -1) {
            this._book.splice(index, 1);
        }
    };


}