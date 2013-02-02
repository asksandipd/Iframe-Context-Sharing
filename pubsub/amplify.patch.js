/*globals window:true,ampplify:true*/
(function (global) {
	undefined === global.amplify && (global.amplify = amplify);
	amplify = global.amplify;
}(window.top));
