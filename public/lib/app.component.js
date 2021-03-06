System.register(['angular2/core', './components/simple-member.component', './services/mock-member.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, simple_member_component_1, mock_member_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (simple_member_component_1_1) {
                simple_member_component_1 = simple_member_component_1_1;
            },
            function (mock_member_service_1_1) {
                mock_member_service_1 = mock_member_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_memberService) {
                    this._memberService = _memberService;
                    this.title = 'Go Pray!';
                    this.members = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._memberService.getMembers().then(function (ms) { return _this.members = ms; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [simple_member_component_1.SimpleMemberComponent],
                        providers: [mock_member_service_1.MockMemberService],
                        template: "\n        <h1>Go Pray!</h1>\n        <ul>\n            <li *ngFor=\"#member of members\">\n                <simple-member [member]=\"member\"></simple-member>\n            </li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [mock_member_service_1.MockMemberService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map