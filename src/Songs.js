import React from "react"
import { Card } from "semantic-ui-react";
import Song from "./Song";

class Songs extends React.Component {

  renderSongs =()=>{
    return(this.props.songs.map((song)=>(
      <Song key ={song.id} song={song} deleteSong={this.props.deleteSong} updateSong={this.props.updateSong}/>
    )))
  };

  render(){
    return(
      <div style={{marginTop: "15px"}}>
        <Card.Group raised="true" centered>
          {this.renderSongs()}
        </Card.Group>
      </div>
    );
  }
}

export default Songs;

