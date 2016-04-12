var spotify_api = require('../service/spotify_api');
var spotify_user = require('./spotify.user');

var spotify_service = new spotify_api();


var spotify = { 

	init: function(client_id, client_secret) {
		console.log("Classe Spotify Iniciada");

		this.client_id = client_id; 
		this.client_secret = client_secret;
		this.redirect_uri = "http://local.savefriend/callback.html";
	},

	auth: function(callback) {
		 getPopup();

		 window.addEventListener("message", function(event) {
	            var hash = JSON.parse(event.data);
	            if (hash.type == 'access_token') {
	                callback(hash.access_token);
	            }
	        }, false);

		function getLoginURL(scopes) {
            return 'https://accounts.spotify.com/authorize?client_id=' + spotify.client_id +
              '&redirect_uri=' + encodeURIComponent(spotify.redirect_uri) +
              '&scope=' + encodeURIComponent(scopes.join(' ')) +
              '&response_type=token';
        }

        function getPopup (){
        	var width = 450,
       		    height = 730,
            	left = (screen.width / 2) - (width / 2),
            	top = (screen.height / 2) - (height / 2);

            	var w = window.open(getLoginURL([
					            'user-read-email'
					        ]),
                            'Spotify',
                            'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                           );

            	
        }
	},

	login: function() {
		
	   	var loginButton = document.getElementById('btn-login');

    	loginButton.addEventListener('click', function() {
	        spotify.auth(function(accessToken) {
	            spotify_user.get(accessToken);

	            loginButton.style.display = 'none';
	        });
	    });
	    
	},
}

module.exports = spotify;