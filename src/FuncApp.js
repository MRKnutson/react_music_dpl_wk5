import './App.css';
import React, { useState } from 'react';
import FuncSongs from './FuncSongs';
import { Container, Header, Segment } from 'semantic-ui-react';
import FuncSongForm from './FuncSongForm';

const FuncApp = (props) => {
  const [songs, setSongs] = useState([
    { id: 1, name: "I bet you look good on the dancefloor", artist: "Arctic Monkeys" },
    { id: 2, name: "Electric Feel", artist: "MGMT" },
    { id: 3, name: "A-Punk", artist: "Vampire Weekend" },
  ],)

  const addSong=(newSong)=>{
    let newSongArray = [newSong, ...songs];
    setSongs(newSongArray)
  };

  const updateSong = (updatedSong)=>{
    let updatedSongs = songs.map((song)=>song.id !== updatedSong.id ? song : updatedSong)
    setSongs(updatedSongs)
  };

  const deleteSong =(id)=>{
    let filteredSongs = songs.filter((song)=>song.id !== id)
    setSongs(filteredSongs)
  };


  return (
    <Container className="main-container">
      <div className="App">
        <Segment raised padded textAlign='center'
          style={{ minHeight: '200px', padding: '1em 0em' }}
          vertical
          inverted>
          <Header size= 'huge' style={{paddingTop: '40px'}}>Mike's Music List</Header>
          <FuncSongForm addSong={addSong}/>
        </Segment>
        <FuncSongs songs ={songs} addSong={addSong} updateSong = {updateSong} deleteSong={deleteSong}/>
      </div>
    </Container>
  );
}

export default FuncApp;
