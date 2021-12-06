import React from "react"
import SongForm from "./SongForm";

class Song extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h3>{this.props.song.name}</h3>
        <p>{this.props.song.artist}</p>
        <p>{this.props.song.id}</p>
        <button onClick = {()=>this.props.deleteSong(this.props.song.id)}>Delete</button>
        <SongForm song= {this.props.song} updateSong={this.props.updateSong}/>
        <hr />
      </div>
    )
  }
}

export default Song;