
class Playlist {
    constructor() {
      this.songs = [];
    }
  
    createPlaylist() {
      this.songs = [];
    }
  
    addSong(title, artist) {
      const song = this.songs.find((s) => s.title === title && s.artist === artist);
  
      if (song) {
        song.playCount++;
      } else {
        this.songs.push({
          title,
          artist,
          playCount: 1,
        });
      }
    }
  
    playSong(title, artist) {
      const song = this.songs.find((s) => s.title === title && s.artist === artist);
  
      if (song) {
        song.playCount++;
        return song;
      } else {
        return null;
      }
    }
  
    getSortedSongs() {
      return this.songs.slice().sort((a, b) => b.playCount - a.playCount);
    }
  }
  
  module.exports = Playlist;
  