import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class MemberTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _member = []
    static id = 0

    public getAll() {
        return this._member;
    }

    public get(id) {
        return this._member.find(item => item.id === parseInt(id));
    };

    public create(data) {
        data["id"] = MemberTestService.id
        this._member.push(data);
        MemberTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._member.findIndex(item => item.id === data.id);
        this._member[foundIndex] = data;
    };

    public remove(id) {
        this._member.splice(id, 1);
    };


}