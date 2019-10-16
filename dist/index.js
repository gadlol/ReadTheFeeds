"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
tabris_1.statusBar.background = 'black';
tabris_1.statusBar.displayMode = 'float';
tabris_1.statusBar.theme = 'dark';
const tabris_2 = require("tabris");
new tabris_2.WebView({
    left: 0, right: 0, top: 0, bottom: 0,
    url: "https://app.readthefeeds.com/"
}).appendTo(tabris_2.contentView);
