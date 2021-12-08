import './App.css';
import React from 'react';
import Songs from './Songs';
import { Header, Icon, Segment } from 'semantic-ui-react';
import SongForm from './SongForm';
import { BLACK, WHITE } from './components/Styles';
import styled, { keyframes } from 'styled-components';

class App extends React.Component {
  state = {
    songs: [
      { id: 1, name: "I bet you look good on the dancefloor", artist: "Arctic Monkeys" },
      { id: 2, name: "Electric Feel", artist: "MGMT" },
      { id: 3, name: "A-Punk", artist: "Vampire Weekend" },
      { id: 4, name: "Reptila", artist: "The Strokes" },
      { id: 5, name: "Rebellion (Lies)", artist: "Arcade Fire" },
      { id: 6, name: "Fluorescent Adolescent", artist: "Arctic Monkeys" },
      { id: 7, name: "Skinny Love", artist: "Bon Iver" },
      { id: 8, name: "Seven Nation Army", artist: "The White Stripes" },
      { id: 9, name: "New Slang", artist: "The Shins" },
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
      <div>
        <StyledSegment raised padded textAlign='center'
         style={{ minHeight: '200px', padding: '1em 0em' }}
         vertical
         >
          <Music>
            <Icon name="music" />
          </Music>
          <StyledHeader>Mike's Music List</StyledHeader>
          <SongForm addSong={this.addSong}/>
        </StyledSegment>
        <Songs songs ={this.state.songs} addSong={this.addSong} updateSong = {this.updateSong} deleteSong={this.deleteSong}/>
      </div>
    );
  }
}

export default App;


const  Expand = keyframes`
  0% {
    width: 10%;
    height: 60px;
    box-shadow:  0 0 0 #cccccc,
                0 0 0 #ffffff,
                  10px 10px 10px #cccccc inset,
                  -10px -10px 10px #ffffff inset;
  }
  25% {
    width: 30%;
    height: 60px;
    box-shadow:  10px 10px 10px #cccccc,
                10px 10px 10px #ffffff,
                0 0 0 #cccccc inset,
                0 0 0 #ffffff inset;
  }
  50% {
    width: 30%;
    height: 240px;
    box-shadow:  10px 10px 10px #cccccc,
                10px 10px 10px #ffffff,
                0 0 0 #cccccc inset,
                0 0 0 #ffffff inset;
  }
  100% {
    width: 100%;
    height: 240px;
    box-shadow:  40px 40px 40px #cccccc,
                0 0 0 #ffffff,
                0 0 0 #cccccc inset,
                2px 2px 2px #ffffff inset;
  }
`

const StyledSegment =styled(Segment)`
  background-color: ${BLACK} !important;
  border-radius: 10px !important;
  animation ${Expand} 2s cubic-bezier(0.16, 1, 0.3, 1) ;
  height: 240px;
  box-shadow:  40px 40px 40px #cccccc,
                0 0 0 #ffffff,
                0 0 0 #cccccc inset,
                2px 2px 2px #ffffff inset !important;
  margin-bottom: 50px !important;
`

const StyledHeader = styled(Header)`
  color: ${WHITE} !important;
  font-size: 3rem !important;
`

const jiggle = keyframes`
  from{ transform: rotate(-30deg);}
  to{ transform: rotate(30deg);}
`;

const Music = styled.div`
  display: inline-block;
  padding-top: 20px;
  color: ${WHITE};
  font-size: 3rem;
  animation: ${jiggle} 2s linear infinite alternate;
`