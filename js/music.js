var link = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=joshcai&limit=1&api_key=2854d995eedb5a6d3d2a15e21efe82cd&format=json';
function getCurrentSong() {
  $.get(link, function(data) {
    var song = data.recenttracks.track[0];
    var currently_playing = '...last listened to ';
    if('@attr' in song && song['@attr'].nowplaying) {
      currently_playing = '...is listening to ';
    }
    var song_name = song.name;
    var artist_name = song.artist['#text'];
    var element = '<strong>' + song_name + ' - ' + artist_name + '</strong>';

    $('#music').html(currently_playing + element);
  });
}
getCurrentSong();
setInterval(function(){
  getCurrentSong();
}, 30000);