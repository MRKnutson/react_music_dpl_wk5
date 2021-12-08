import React from "react"
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import { RED, StyledButton, WHITE} from "./components/Styles";
import SongForm from "./SongForm";

class Song extends React.Component {
  render() {
    return (
      <StyledCard>
        <Card.Content>
          <Card.Header>
            <Truncated>Title: {this.props.song.name}</Truncated>
          </Card.Header>
          <Card.Meta>ID: {this.props.song.id}</Card.Meta>
          <Card.Description>
            Artist: {this.props.song.artist}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <SongForm song= {this.props.song} updateSong={this.props.updateSong} />
            <StyledButton color={RED} onClick = {()=>this.props.deleteSong(this.props.song.id)}>
              Delete
            </StyledButton>
          </div>
        </Card.Content>
      </StyledCard>
    )
  }
}

export default Song;

const Truncated = styled.div `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCard = styled(Card)`
  min-width:250px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px !important;
  background: ${WHITE} !important;
`;
