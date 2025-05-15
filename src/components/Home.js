import React from 'react'

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
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">Note Title</h5>
            <p className="card-text">This is a sample note description.</p>
            <button className="btn btn-primary">Edit Note</button>
            <button className="btn btn-danger mx-2">Delete Note</button>
          </div>
        </div>
      </div>
    </div>
  )
}
