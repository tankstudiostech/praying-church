import {Component} from 'angular2/core';
import {Member} from '../models/member';

@Component({
    selector: 'simple-member',
    template: `
        <span class="badge">{{getMemberCharacter()}}</span> {{member.fname + member.lname}}
    `,
    inputs: ['member']
})

export class SimpleMemberComponent {
    public member: Member;
    
    public getMemberCharacter() {
        return this.member.member ? 'M' : 'G';
    }
}