import logo from './logo.svg';
import './App.css';
import React from 'react';
import Songs from './Songs';

class App extends React.Component {
  state = {
    songs: [
      { id: 1, name: "I bet you look good on the dancefloor", artist: "Arctic Monkeys" },
      { id: 2, name: "Electric Feel", artist: "MGMT" },
      { id: 3, name: "A-Punk", artist: "Vampire Weekend" },
    ],
  };

  addSong=(newSong)=>{
    let newSongArray = [newSong, ...this.state.songs];
    this.setState({songs: newSongArray})
  };

  updateSong = (updatedSong)=>{
    let updatedSongs = this.state.songs.map((song)=>song.id !== updatedSong.id ? song : updatedSong)
    this.setState({songs: updatedSongs})
  };

  deleteSong =(id)=>{
    let filteredSongs = this.state.songs.filter((song)=>song.id !== id)
    this.setState({songs: filteredSongs})
  };

  render() {
    return (
      <div className="App">
        <h1>Music List</h1>
        <Songs songs ={this.state.songs} addSong={this.addSong} updateSong = {this.updateSong} deleteSong={this.deleteSong}/>
      </div>
    );
  }
}

export default App;
