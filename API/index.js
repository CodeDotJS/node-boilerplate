'use strict';

const "module_name" = require("module-name");

module.exports = "value" => {
	if (typeof "value" !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof("value")}`);
	}

	// do the thing

}
