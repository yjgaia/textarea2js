UPPERCASE_ONE.MAIN = METHOD({
	run : function() {'use strict';
		if (BROWSER_CONFIG.MAIN !== undefined) {
			BROWSER_CONFIG.MAIN(UPPERCASE_ONE);
		} else {
			UPPERCASE_ONE.MATCH_VIEW({
				uris : [''],
			    target: CLASS({
			      preset: function() {
			        return VIEW;
			      },
			      init: function(cls, inner, self) {
					if  (BROWSER_CONFIG.BODY_MAIN !== undefined) {
						BROWSER_CONFIG.BODY_MAIN().appendTo(BODY);
					} else {
						P({
							  children: BROWSER_CONFIG.P_MAIN()
							}).appendTo(BODY);
					}
			      }
			    })
			});
		}
	}
});
