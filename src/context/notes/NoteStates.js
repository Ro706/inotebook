import React, { useState } from "react";
import NoteContext from "./noteContext"; // Ensure correct import

const NoteState = (props) => {
    const notesInitial = [
        {
            _id: "6826490fd8771742cd18991b",
            user: "6772bd596312abbb8d0c1ee3",
            title: "Good morning",
            description: "hello world this is monu",
            tag: "python",
            date: "2025-05-15T20:05:35.650Z",
            __v: 0
        },
        {
            _id: "6826492ad8771742cd18991e",
            user: "6772bd596312abbb8d0c1ee3",
            title: "Good night",
            description: "bye rohit",
            tag: "python",
            date: "2025-05-15T20:06:02.650Z",
            __v: 0
        }
    ];

    const [notes, setNotes] = useState(notesInitial);

    // Add a new note
    const addNote = (title, description, tag) => {
        const note = {
            _id: Date.now().toString(), // Generate a unique ID dynamically
            user: "6772bd596312abbb8d0c1ee3",
            title,
            description,
            tag,
            date: new Date().toISOString(),
            __v: 0
        };
        setNotes([...notes, note]);
        console.log("Added a new note:", note);
    };

    // Delete a note
    const deleteNote = (id) => {
        console.log("Deleting a note with ID:", id);
        const newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes);
        console.log("Note deleted successfully.");
    };

    // Edit a note
    const editNote = (id, updatedTitle, updatedDescription, updatedTag) => {
        console.log("Editing note with ID:", id);
        const updatedNotes = notes.map(note =>
            note._id === id
                ? { ...note, title: updatedTitle, description: updatedDescription, tag: updatedTag }
                : note
        );
        setNotes(updatedNotes);
        console.log("Note updated successfully.");
    };

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;