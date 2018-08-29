(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('socket.io')) :
	typeof define === 'function' && define.amd ? define(['socket.io'], factory) :
	(global.app = factory(global.socket));
}(this, (function (socket) { 'use strict';

	socket = socket && socket.hasOwnProperty('default') ? socket['default'] : socket;



	return socket;

})));
