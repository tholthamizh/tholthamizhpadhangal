"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var words_service_1 = require('./words.service');
var WordlistComponent = (function (_super) {
    __extends(WordlistComponent, _super);
    function WordlistComponent(wordService) {
        _super.call(this);
        this.wordService = wordService;
        this.wordList = [];
        this.words = [];
        this.count = 0;
        this.selectedWord = '';
        this.desc = '';
    }
    WordlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wordService.getWordList().subscribe(function (data) {
            _this.wordList = data.words;
            _this.convertWordList();
        }, function (err) {
            console.error(err);
        });
    };
    WordlistComponent.prototype.randomSel = function () {
        var item = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.getWordDetail(item);
    };
    WordlistComponent.prototype.getWordDetail = function (word) {
        var _this = this;
        this.wordService.getWordDesc(word).subscribe(function (data) {
            _this.selectedWord = word;
            _this.desc = data.meaning;
        }, function (err) {
            console.error(err);
        });
    };
    WordlistComponent.prototype.convertWordList = function () {
        this.words = [];
        var index = 0;
        var currentArr = [];
        while (index < this.wordList.length) {
            if (currentArr.length < 6) {
                currentArr.push(this.wordList[index]);
            }
            else {
                this.words.push({ words: currentArr });
                currentArr = [];
                currentArr.push(this.wordList[index]);
            }
            index++;
        }
        this.words.push({ words: currentArr });
    };
    WordlistComponent.prototype.shuffle = function () {
        var currentIndex = this.wordList.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.wordList[currentIndex];
            this.wordList[currentIndex] = this.wordList[randomIndex];
            this.wordList[randomIndex] = temporaryValue;
        }
        this.convertWordList();
    };
    WordlistComponent = __decorate([
        core_1.Component({
            selector: 'wordlist',
            template: "\n  \t<div class=\"row\">\n  \t\t<div class=\"col-md-2\">\n\t  \t\t<br/>\n\t  \t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"shuffle()\">\u0B95\u0BC1\u0BB2\u0BC1\u0B95\u0BCD\u0B95\u0BC1</button>\n\t  \t\t<br/><br/>\n\t  \t\t<button type=\"button\" id=\"shuffle\" class=\"btn btn-primary\" (click)=\"randomSel()\">\u0BA8\u0BBF\u0BB0\u0BC8\u0BAE\u0BC1\u0BB1\u0BC8 \u0B87\u0BA9\u0BCD\u0BB1\u0BBF \u0B8E\u0B9F\u0BC1 </button>\n\t  \t\t<br/>\n\t  \t</div>\n\t  \t<div class=\"col-md-10\">\n\t  \t\t<h4>{{selectedWord}}</h4>\n\t  \t\t<p [innerHTML]=\"desc\"></p>\n\t  \t</div>\n  \t</div>\n  \t<table class='table table-hover'>\n  \t\t<thead><tr><td>\u0BAA\u0BA4\u0BAE\u0BCD({{wordList.length}})</td></tr></thead><tbody>\n  \t\t<tbody>  \t\t\n  \t\t\t<tr *ngFor=\"let wordl of words\">\n  \t\t\t\t<td *ngFor=\"let word of wordl.words\" (click)=\"getWordDetail(word)\">{{word}}</td>\n  \t\t\t</tr>\n  \t\t</tbody>\n  \t</table>\n\n  "
        }), 
        __metadata('design:paramtypes', [words_service_1.WordService])
    ], WordlistComponent);
    return WordlistComponent;
}(core_1.OnInit));
exports.WordlistComponent = WordlistComponent;
//# sourceMappingURL=wordlist.component.js.map