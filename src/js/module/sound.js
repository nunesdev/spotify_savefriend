/*
 * ilum V 1.0
 * Bruno Nunes
 * http://brunodev.com.br
 * sound.js
 * */

'use strict';

var sound =
{
	play_run:true,
	sfx: [],
	
	init: function() {
		
		this.sfx[0]  = 'sfX_loop_piano.mp3'; 
		this.sfx[1]	 = 'sfx_ilum_fade.mp3';

		this.handler();	
	},
	handler:function() {
  
	  this.player(this.sfx[Math.floor(Math.random() * this.sfx.length)]);	
	  
	  // Verifico se o usuário está no site, ou trocou , true = sound.play, false = sound.pause;
	  vis(function(){
		  vis() ? sound.play() : sound.pause();
		});
	},
	
	player:function(listener) {
		
		if(this.play_run == true) {
			$('#sound').jPlayer({
				ready : function() {
						$(this).jPlayer("setMedia", {
							mp3 : "dist/sfx/"+listener
						}).jPlayer("play");
					},
				loop : true,
				swfPath : "/dist/swf"
			});
		
			var $that = this;
			
			var btn = document.querySelector('#mute');
			var kickMute = function() {
				if($(this).hasClass('mute'))
				{
					$(this).removeClass('mute');
					$that.play();
				}else{
					$(this).addClass('mute');
					$that.pause();
				}
			
				
			};
	
			btn.addEventListener('click', kickMute, true);
		}
	},
	
	play:function() {
		$("#sound").jPlayer("play");
		$("#mute").html('<i class="fa  fa-volume-up"></i>&nbsp;<span>Pause</span>');
	},

	pause:function() {
		$("#sound").jPlayer("pause");
		$("#mute").html('<i class="fa  fa-volume-off"></i>&nbsp;<span>Play</span>');
	}
	
}

module.exports = sound;