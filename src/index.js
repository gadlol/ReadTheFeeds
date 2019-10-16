import {statusBar} from 'tabris';

statusBar.background = 'black';
statusBar.displayMode = 'float';
statusBar.theme = 'dark';


import { WebView, contentView } from 'tabris';

new WebView({
 left: 0, right: 0, top: 0, bottom: 0,
 url: "https://app.readthefeeds.com/"
}).appendTo(contentView);
