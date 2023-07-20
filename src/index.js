// index.js
const express = require('express');
const bodyParser = require('body-parser');
const Playlist = require('./playlist');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Create a new playlist instance
const playlist = new Playlist();

// Create a playlist
app.post('/playlist', (req, res) => {
  playlist.createPlaylist();
  res.json({ message: 'Playlist created successfully.' });
});

// Add a song to the playlist
app.post('/playlist/add', (req, res) => {
  const { title, artist } = req.body;
  playlist.addSong(title, artist);
  res.json({ message: 'Song added to the playlist successfully.' });
});

// Play a song from the playlist
app.post('/playlist/play', (req, res) => {
  const { title, artist } = req.body;
  const nowPlaying = playlist.playSong(title, artist);
  if (nowPlaying) {
    res.json({ message: `Now playing: ${nowPlaying.title} - ${nowPlaying.artist}` });
  } else {
    res.status(404).json({ error: 'Song not found in the playlist.' });
  }
});

// Get the list of songs sorted by most played
app.get('/playlist/sorted', (req, res) => {
  const sortedSongs = playlist.getSortedSongs();
  res.json(sortedSongs);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
