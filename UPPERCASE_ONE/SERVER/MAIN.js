UPPERCASE_ONE.MAIN = METHOD({
	run : function() {'use strict';
		if (SERVER_CONFIG.MAIN !== undefined) {
			SERVER_CONFIG.MAIN(UPPERCASE_ONE);
		}
	}
});
