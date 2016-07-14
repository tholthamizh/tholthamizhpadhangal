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
var http_1 = require('@angular/http');
var WORDS = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"];
var WordService = (function () {
    function WordService(http) {
        this.http = http;
    }
    WordService.prototype.getWordList = function () {
        return this.http.get('data/words.json').map(this.somefun);
    };
    WordService.prototype.getWordDesc = function (word) {
        return this.http.get('data/words/' + word + '.json').map(this.somefun);
    };
    WordService.prototype.somefun = function (x) {
        return x.json();
    };
    WordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WordService);
    return WordService;
}());
exports.WordService = WordService;
//# sourceMappingURL=words.service.js.map