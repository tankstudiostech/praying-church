System.register(['angular2/core', '../models/member'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, member_1;
    var MockMemberService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (member_1_1) {
                member_1 = member_1_1;
            }],
        execute: function() {
            MockMemberService = (function () {
                function MockMemberService() {
                    this._members = [
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
                }
                MockMemberService.prototype.getMembers = function () {
                    return Promise.resolve(this._members);
                };
                MockMemberService.prototype.createMember = function (fname, lname, isMember) {
                    var mem = new member_1.Member();
                    mem.fname = fname;
                    mem.lname = lname;
                    mem.member = isMember;
                    return mem;
                };
                MockMemberService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MockMemberService);
                return MockMemberService;
            })();
            exports_1("MockMemberService", MockMemberService);
        }
    }
});
//# sourceMappingURL=mock-member.service.js.map