import React from "react"
import { Card, Grid } from "semantic-ui-react";
import styled from "styled-components";
import Song from "./Song";

class Songs extends React.Component {

  renderSongs =()=>{
    return(this.props.songs.map((song)=>(
      <SongDisplay>
        <Song key ={song.id} song={song} deleteSong={this.props.deleteSong} updateSong={this.props.updateSong}/>
      </SongDisplay>
    )))
  };

  render(){
    return(
      <StyledCardGroup>
        {/* <Grid padded stackable>
          <Grid.Row > */}
            {this.renderSongs()}
          {/* </Grid.Row>
        </Grid> */}
      </StyledCardGroup>
    );
  }
}

export default Songs;

const StyledGridColumn = styled(Grid.Column)`
  padding 20px;
`

const StyledCardGroup = styled(Card.Group)`
  display: flex;
  padding-top: 15px;
  justify-content: center;
`

const SongDisplay = styled.div`
  padding: 15px;
`