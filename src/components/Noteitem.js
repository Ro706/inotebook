import React from 'react'
// racfe react functional component short cut
const Noteitem = (props) => {
  const {note}=props;
  return (
    <div className='col-md-3 d-inline-block mx-2'>
      <div className="card my-3">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <p className="card-text"><small className="text-muted">{note.tag}</small></p>
              <p className="card-text"><small className="text-muted">{note.date}</small></p>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-danger mx-2">Delete</button>
            </div>
          </div>
    </div>
  )
}

export default Noteitem

