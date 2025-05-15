import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext"; // Corrected import

const NoteItem = (props) => {
    const { note } = props;
    const { title, description, tag, date } = note;

    const { deleteNote, editNote } = useContext(NoteContext); // Single useContext call

    const handleDelete = (e) => {
        e.preventDefault();
        deleteNote(note._id);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        editNote(note._id);
    };

    return (
        <div className="col-md-3 d-inline-block mx-2">
            <div className="card my-3" key={note._id}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-muted">{tag}</small>
                    </p>
                    <p className="card-text">
                        <small className="text-muted">{date}</small>
                    </p>
                    <button className="btn btn-primary" onClick={handleEdit}>
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;