var spotify = require('./module/spotify');
var sound   = require('./module/sound');

spotify.init("202ad02f754a4b95bcdafd72f695a29b","9aa1fdd7b971422591c6ce787c6ebdbb");
spotify.login();

sound.init();

