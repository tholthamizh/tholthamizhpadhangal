"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var VerifyTextComponent = (function () {
    function VerifyTextComponent() {
        this.status = false;
        this.oncomplete = new core_1.EventEmitter();
    }
    VerifyTextComponent.prototype.answerChange = function (ans) {
        if (ans === this.answer) {
            this.status = true;
            this.oncomplete.emit(true);
        }
        else {
            this.status = false;
        }
    };
    VerifyTextComponent.prototype.showAnswer = function () {
        this.currentAnswer = this.answer;
        this.status = true;
        this.oncomplete.emit(false);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], VerifyTextComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], VerifyTextComponent.prototype, "answer", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VerifyTextComponent.prototype, "oncomplete", void 0);
    VerifyTextComponent = __decorate([
        core_1.Component({
            selector: 'verify-text',
            templateUrl: './app/verifytext/verifytext.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VerifyTextComponent);
    return VerifyTextComponent;
}());
exports.VerifyTextComponent = VerifyTextComponent;
//# sourceMappingURL=verifytext.component.js.map