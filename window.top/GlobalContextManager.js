var GlobalContextManager = GlobalContextManager || {
	__stack__ : {}
};

GlobalContextManager.register = function(name, context) {
	this.__stack__[name] = context;
	this.__stack__[name].__NAME = name;
};

GlobalContextManager.unregister = function(name) {
	delete this.__stack__[name];
};

GlobalContextManager.get = function(name) {
	return this.__stack__[name];
};

GlobalContextManager.onload = function(callback) {
	// monkey patch to wait for all iframes to load!!
	window.onload = setTimeout(callback, 1000); 
};