require('../COFFEECASE/BOOT.coffee');

var
// origin BOOT
_BOOT = BOOT;

BOOT = function(params) {
	if (params.CONFIG === undefined) {
		params.CONFIG = {};
	}
	params.CONFIG.defaultBoxName = 'UPPERCASE_ONE';
	_BOOT(params);
};

P = function(callback) {
	var params = {
	  CONFIG: {
	    isDevMode: true
	  },
	  SERVER_CONFIG: {
	    isNotUsingDB: true
	  },
	  BROWSER_CONFIG: {
	    P_MAIN: callback
	  }
	};

	BOOT(params);
};

BODY = function(callback) {
	var params = {
	CONFIG: {
		isDevMode: true
	},
	SERVER_CONFIG: {
		isNotUsingDB: true
	},
	BROWSER_CONFIG: {
		BODY_MAIN: callback
	}
	};

	BOOT(params);
};
