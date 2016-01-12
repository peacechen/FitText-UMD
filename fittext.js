/*!
 * FitText-UMD
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 * Modified by Slawomir Kolodziej http://slawekk.info
 * Modified by Peace Chen to support modules
 *
 * Date: Tue Jan 12 2016 10:03:36 GMT-0600 (CST)
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.fitText = factory();
	}
}(this, function() {

	var css = function(el, prop) {
		return getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : el.currentStyle[prop];
	};

	var addEvent = function(el, type, fn) {
		if (el.addEventListener)
			el.addEventListener(type, fn, false);
		else
			el.attachEvent('on' + type, fn);
	};

	var extend = function(obj, ext) {
		for (var key in ext)
			if (ext.hasOwnProperty(key))
				obj[key] = ext[key];
		return obj;
	};

	var fitText = function(el, kompressor, options) {

		var settings = extend({
			'minFontSize': -1 / 0,
			'maxFontSize': 1 / 0
		}, options);

		var fit = function(el) {
			var compressor = kompressor || 1;

			var resizer = function() {
				el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
			};

			// Call once to set.
			resizer();

			// Bind events
			// If you have any js library which support Events, replace this part
			// and remove addEvent function (or use original jQuery version)
            // Candidate: http://marcj.github.io/css-element-queries/
			addEvent(window, 'resize', resizer);
		};

		if (el.length)
			for (var i = 0; i < el.length; i++)
				fit(el[i]);
		else
			fit(el);

		// return set of elements
		return el;
	};

	return fitText;
}));
