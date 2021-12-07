import React from "react"
import { Button, Card } from "semantic-ui-react";
import FuncSongForm from "./FuncSongForm";

const FuncSong=(props)=>{
  return (
    <Card>
      <Card.Content>
        <Card.Header>Title: {props.song.name}</Card.Header>
        <Card.Meta>ID: {props.song.id}</Card.Meta>
        <Card.Description>
          Artist: {props.song.artist}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <FuncSongForm song= {props.song} updateSong={props.updateSong} />
          <Button color='red' onClick = {()=>props.deleteSong(props.song.id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default FuncSong;
