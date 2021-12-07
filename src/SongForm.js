import React from "react"
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class SongForm extends React.Component {

  state={
    name: this.props.song ? this.props.song.name : "",
    artist: this.props.song ? this.props.song.artist : "",
    open: false
  }
  componentDidMount() {
    console.log("mounted")
  }

  componentDidUpdate(){
    console.log("updated")
  };

  componentWillUnmount(){
    console.log("unmounting")
  };

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
      this.setState({open: false})
    }
    else {
      let id = Math.ceil(Math.random() * 1000)
      this.props.addSong({
        id: id,
        name: this.state.name,
        artist: this.state.artist
      })
      this.setState({name: "", artist: "", open: false});
    }
  };

  closeModal =()=>{
    this.setState({open:false})
  };
  

  render(){
    return(
      <Modal
      closeIcon
      open={this.state.open}
      trigger={<Button color = "green" border="2px solid black">{this.props.song ? "Edit Song" : "Add New Song"}</Button>}
      onClose={() => this.setState({open:false})}
      onOpen={() => this.setState({open:true})}
    >
      <Header icon='music' content={this.props.song ? "Update Song" : "Add New Song"} />
      <Modal.Content>
      <div>
        <h1>song form here:</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Song name:</p>
          <input name="name" label="Name" value={this.state.name} onChange={this.handleChange}/>
          <p>Song artist:</p>
          <input name="artist" label="Artist" value={this.state.artist} onChange={this.handleChange}/>
        </form>
      </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => this.closeModal()}>
          <Icon name='remove' /> Cancel
        </Button>
        <Button color='green' onClick={this.handleSubmit}>
          <Icon name='checkmark' /> Submit
        </Button>
      </Modal.Actions>
    </Modal>
      
    )
  }
};

export default SongForm;