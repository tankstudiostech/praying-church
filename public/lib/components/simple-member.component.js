System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SimpleMemberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SimpleMemberComponent = (function () {
                function SimpleMemberComponent() {
                }
                SimpleMemberComponent.prototype.getMemberCharacter = function () {
                    return this.member.member ? 'M' : 'G';
                };
                SimpleMemberComponent = __decorate([
                    core_1.Component({
                        selector: 'simple-member',
                        template: "\n        <span class=\"badge\">{{getMemberCharacter()}}</span> {{member.fname + member.lname}}\n    ",
                        inputs: ['member']
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleMemberComponent);
                return SimpleMemberComponent;
            })();
            exports_1("SimpleMemberComponent", SimpleMemberComponent);
        }
    }
});
//# sourceMappingURL=simple-member.component.js.map