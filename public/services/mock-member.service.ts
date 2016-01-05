import {Injectable} from 'angular2/core';
import {Member} from '../models/member';
import {IMemberService} from './i-member.service';
@Injectable()
export class MockMemberService implements IMemberService {
    private _members = [
        this.createMember("Ryan", "Tankersley", true),
        this.createMember("Michelle", "Tankersley", true),
        this.createMember("Sean", "Fuentes", true),
        this.createMember("Erica", "Fuentes", true),
        this.createMember("Caleb", "Moore", true),
        this.createMember("Adrian", "Moore", true),
        this.createMember("Clinton", "Fields", true),
        this.createMember("Malia", "Castillo", true),
        this.createMember("Travis", "Tosh", true),
        this.createMember("Joe", "Bob", false),
        this.createMember("Steve", "Stevenson", false),
        this.createMember("Pete", "Peterson", false),
        this.createMember("Ron", "Swanson", false),
        this.createMember("Turd", "Ferguson", false),
        this.createMember("Olive", "Lamp", false),
    ];
    
    getMembers() {
        return Promise.resolve(this._members);
    }
    
    private createMember(fname: string, lname: string, isMember: boolean) {
        var mem = new Member();
        mem.fname = fname;
        mem.lname = lname;
        mem.member = isMember;
        return mem;
    }
}