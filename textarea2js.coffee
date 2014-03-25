require('./UPPERCASE_ONE/BOOT.js')

BOOT
	CONFIG :
		defaultTitle : 'textarea2js'
		port : 8326
		isDevMode : true
		
	SERVER_CONFIG :
		isNotUsingDB : true

	BROWSER_CONFIG :
		MAIN : (ONE) ->

			ONE.MATCH_VIEW
				uris : ['', 'View']
				target : CLASS
				
					preset : ->
						return VIEW
					init : (cls, inner, self) ->

						wrapper = DIV(
							style :
								marginTop : 50
								fontSize : 20
								textAlign : 'center'
							children : [
								
								H1
									style :
										marginBottom : 10
									children : ['<- textarea2js ->']
								
								textarea = TEXTAREA
									style :
										height : 200
									value : 'this\nis\nexample.'
									onKeydown : ->
										DELAY ->
											js.setValue '\'' + (textarea.getValue().replace(/\n/g, '\\n').replace(/'/g, '\\\'')) + '\''
								
								js = TEXTAREA
									style :
										height : 200
									onKeydown : ->
										DELAY ->
											textarea.setValue eval(js.getValue())
								
								P
									style :
										marginTop : 10
										fontSize : 12
									children : [LINK('https://github.com/Hanul/textarea2js'), BR(), 'This project build with UPPERCASE(', LINK('http://UPPERCASE.IO') , ').', BR(), 'by Hanul.']
							]
						).appendTo BODY
						
						FIRE_ALL
							node : textarea
							name : 'keydown'
