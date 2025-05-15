import React from 'react'
import noteContext from '../context/notes/noteContext';
const AddNote = () => {
  const context=React.useContext(noteContext);
  const {addNote} = context;

  const [note, setNote] = React.useState({title:"", description:"", tag:""});
  const handleClick=(e)=>{
    e.preventDefault(); 
    addNote(note.title, note.description, note.tag);
    setNote({title:"", description:"", tag:""});
  }
  const onChange=(e)=>{
    setNote({...note, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h1>Add Notes</h1>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label" onChange={onChange}>Description</label>
            <textarea type="text" className="form-control" id="description" name="description"/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
