import './App.css';
import React from 'react';
import Songs from './Songs';
import { Container, Header, Segment } from 'semantic-ui-react';
import SongForm from './SongForm';

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
      <Container>
        <div className="App">
          <Segment raised padded textAlign='center'
            style={{ minHeight: '200px', padding: '1em 0em' }}
            vertical
            inverted>
            <Header size= 'huge' style={{paddingTop: '40px'}}>Mike's Music List</Header>
            <SongForm addSong={this.addSong}/>
          </Segment>
          <Songs songs ={this.state.songs} addSong={this.addSong} updateSong = {this.updateSong} deleteSong={this.deleteSong}/>
        </div>
      </Container>
    );
  }
}

export default App;
