var spotify_api = require('../service/spotify_api');
var spotify_service = new spotify_api();

var spotify_user = { 

	get: function(accessToken) {
		var $that = this;

		spotify_service.setAccessToken(accessToken);
        spotify_service.getMe()
            .then(function(response) {
                $that.user = response;
                $that.getPlaylist();
                $that.getMyFriends();
            });		
	},

	getPlaylist: function() {
		console.log(this);
		spotify_service.getUserPlaylists(this.user.id)
		  
		  .then(function(data) {
		    console.log('User playlists', data);
		  }, function(err) {
		    console.error(err);
		  });

	},

	getMyFriends: function(){
		spotify_service.getMyFriends(this.user.id)
		  
		  .then(function(data) {
		    console.log('User friends', data);
		  }, function(err) {
		    console.error(err);
		  });
	}


}

module.exports = spotify_user;