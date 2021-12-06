import React from "react"
import Song from "./Song";
import SongForm from "./SongForm";

class Songs extends React.Component {

  renderSongs =()=>{
    return(this.props.songs.map((song)=>(
      <Song key ={song.id} song={song} deleteSong={this.props.deleteSong} updateSong={this.props.updateSong}/>
    )))
  };

  render(){
    return(
      <div>
        <h1>Render songs below:</h1>
        <SongForm addSong = {this.props.addSong}/>
        {this.renderSongs()}
      </div>
    );
  }
}

export default Songs;

