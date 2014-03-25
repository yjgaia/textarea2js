require '../UPPERCASE/BOOT.js'

_BOOT = BOOT

global.BOOT = (params) ->
	
	compile = (require './coffee-script.js').CoffeeScript.compile

	params.MULTI_LANG_SUPPORT =
		coffee : (code) ->
			compile code
		litcoffee : (code) ->
			compile code, { literate: true }
		
	_BOOT params
