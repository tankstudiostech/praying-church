import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'
import {Member} from './models/member';
import {SimpleMemberComponent} from './components/simple-member.component';
import {MockMemberService} from './services/mock-member.service';
import {IMemberService} from './services/i-member.service';

@Component({
    selector: 'my-app',
    directives: [SimpleMemberComponent],
    providers: [MockMemberService],
    template: `
        <h1>Go Pray!</h1>
        <ul>
            <li *ngFor="#member of members">
                <simple-member [member]="member"></simple-member>
            </li>
        </ul>
    `
})

export class AppComponent implements OnInit { 
    constructor(private _memberService: MockMemberService) { }
    
    public title = 'Go Pray!';
    public members:Member[] = [];
    
    ngOnInit() {
        this._memberService.getMembers().then(ms => this.members = ms);
    }
    
}