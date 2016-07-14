"use strict";
var router_1 = require('@angular/router');
var wordlist_component_1 = require('./wordlist.component');
var random_word_component_1 = require('./random-word.component');
var routes = [
    {
        path: 'words',
        component: wordlist_component_1.WordlistComponent
    },
    {
        path: 'contact',
        component: random_word_component_1.RandomWordComponent
    },
    {
        path: '',
        redirectTo: '/words'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map