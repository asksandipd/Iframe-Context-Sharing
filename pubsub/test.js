(function () {
	['a', 'b', 'c', 'p9', 'global'].forEach( (function(i){
		amplify.publish('context/'+i, this);
	}).bind(this) );
}());
