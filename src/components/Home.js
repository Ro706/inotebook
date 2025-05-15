import React from 'react'
import Notes from './Notes';
export default function Home() {
  return (
    <div>
      <h1>Add Notes</h1>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea type="text" className="form-control" id="description" />
          </div>
          <button type="submit" className="btn btn-primary">Add Note</button>
        </form>
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
          <Notes/>
      </div>
    </div>
  )
}
