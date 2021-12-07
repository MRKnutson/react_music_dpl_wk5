import React from "react"
import { Button, Card } from "semantic-ui-react";
import SongForm from "./SongForm";

class Song extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>Title: {this.props.song.name}</Card.Header>
          <Card.Meta>ID: {this.props.song.id}</Card.Meta>
          <Card.Description>
            Artist: {this.props.song.artist}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <SongForm song= {this.props.song} updateSong={this.props.updateSong} />
            <Button color='red' onClick = {()=>this.props.deleteSong(this.props.song.id)}>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Song;
