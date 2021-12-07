import React, { useState } from "react"
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const SongForm =(props)=> {
  const [name, setName] = useState(props.song ? props.song.name : "")
  const [artist, setArtist] = useState(props.song ? props.song.artist : "")
  const [id, setId] = useState(props.song ? props.song.id : "")
  const [open, setOpen]= useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(props.song){
      setName(name);
      setArtist(artist)
      props.updateSong({
        id: id,
        name: name,
        artist: artist
      })
      setOpen(false)
    }
    else {
      setId(Math.ceil(Math.random() * 1000))
      props.addSong({
        id: id,
        name: name,
        artist: artist
      })
      setName("");
      setArtist("");
      setOpen(false)
    }
  };

  const closeModal =()=>{
    setOpen(false)
  };
  

  
  return(
    <Modal
    closeIcon
    open={open}
    trigger={<Button color = "green" border="2px solid black">{props.song ? "Edit Song" : "Add New Song"}</Button>}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
  >
    <Header icon='music' content={props.song ? "Update Song" : "Add New Song"} />
    <Modal.Content>
    <div>
      <h1>song form here:</h1>
      <form onSubmit={handleSubmit}>
        <p>Song name:</p>
        <input name="name" label="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>Song artist:</p>
        <input name="artist" label="Artist" value={artist} onChange={(e)=>setArtist(e.target.value)}/>
      </form>
    </div>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={() => closeModal()}>
        <Icon name='remove' /> Cancel
      </Button>
      <Button color='green' onClick={handleSubmit}>
        <Icon name='checkmark' /> Submit
      </Button>
    </Modal.Actions>
  </Modal>     
  )
};

export default SongForm;