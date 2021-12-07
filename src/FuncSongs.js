import React from "react"
import { Card } from "semantic-ui-react";
import Song from "./Song";

const FuncSongs=(props)=>{

  const renderSongs =()=>{
    return(props.songs.map((song)=>(
      <Song key ={song.id} song={song} deleteSong={props.deleteSong} updateSong={props.updateSong}/>
    )))
  };

  return(
    <div style={{marginTop: "15px"}}>
      <Card.Group raised="true" centered>
        {renderSongs()}
      </Card.Group>
    </div>
  );
}

export default FuncSongs;

