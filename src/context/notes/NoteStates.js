import React from "react";
import { useState } from "react";
import { NoteProvider } from "./noteContext";

const NoteState = (props) => {
    const notesInitial=[
  {
    "_id": "6826490fd8771742cd18991b",
    "user": "6772bd596312abbb8d0c1ee3",
    "title": "Good morning",
    "description": "hello world this is monu",
    "tag": "python",
    "date": "2025-05-15T20:05:35.650Z",
    "__v": 0
  },
  {
    "_id": "6826492ad8771742cd18991e",
    "user": "6772bd596312abbb8d0c1ee3",
    "title": "Good night",
    "description": "bye rohit",
    "tag": "python",
    "date": "2025-05-15T20:06:02.650Z",
    "__v": 0
  }
]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteProvider value={{notes,setNotes}}>
            {props.children}
        </NoteProvider>
    );
}

export default NoteState;
