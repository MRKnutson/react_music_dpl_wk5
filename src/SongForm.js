import React from "react"
import { Header, Icon, Modal } from "semantic-ui-react";
import styled from "styled-components";
import { BLACK, GREEN, InputLabel, StyledButton, StyledInput, WHITE } from "./components/Styles";

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
      dimmer='blurring'
      size= 'small'
      open={this.state.open}
      trigger={<StyledButton color={GREEN} >{this.props.song ? "Edit Song" : "Add New Song"}</StyledButton>}
      onClose={() => this.setState({open:false})}
      onOpen={() => this.setState({open:true})}
    >
      <ModalHeader icon='music' content={this.props.song ? "Update Song" : "Add New Song"} />
      <Modal.Content>
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputLabel>Song name:</InputLabel>
          <StyledInput name="name" label="Name" value={this.state.name} onChange={this.handleChange}/>
          <InputLabel>Song artist:</InputLabel>
          <StyledInput name="artist" label="Artist" value={this.state.artist} onChange={this.handleChange}/>
        </form>
      </div>
      </Modal.Content>
      <Modal.Actions>
        <StyledButton color='red' onClick={() => this.closeModal()}>
          <Icon name='remove' /> Cancel
        </StyledButton>
        <StyledButton color='green' onClick={this.handleSubmit}>
          <Icon name='checkmark' /> Submit
        </StyledButton>
      </Modal.Actions>
    </Modal>
      
    )
  }
};

export default SongForm;

const ModalHeader = styled(Header)`
  background-color: ${BLACK} !important;
  color: ${WHITE} !important;
  border: 1px solid ${WHITE} !important;
`