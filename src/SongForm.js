import React from "react"

class SongForm extends React.Component {

  state={
    name: this.props.song ? this.props.song.name : "",
    artist: this.props.song ? this.props.song.artist : "",
  }

  handleChange =(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit =(e)=>{
    e.preventDefault();
    if(this.props.song){
      this.props.updateSong({
        id: this.props.song.id,
        name: this.state.name,
        artist: this.state.artist
      })
    }
    else {
      let id = Math.ceil(Math.random() * 1000)
      this.props.addSong({
        id: id,
        name: this.state.name,
        artist: this.state.artist
      })
      this.setState({name: "", artist: ""});
    }
  };

  render(){
    return(
      <div>
        <h1>song form here:</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Song name:</p>
          <input name="name" label="Name" value={this.state.name} onChange={this.handleChange}/>
          <p>Song artist:</p>
          <input name="artist" label="Artist" value={this.state.artist} onChange={this.handleChange}/>
          <br />
          <button>Submit</button>
          </form>
      </div>
    )
  }
};

export default SongForm;