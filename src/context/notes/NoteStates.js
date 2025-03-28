import React from "react";
import {NoteProvider} from "./noteContext";

const NotesState = () => {
    const state = {
        "name" : "Rohit",
        "class" : "5b"
    }
    return (
        <NoteProvider value={state}>
            {props.chilldren}
        </NoteProvider>
    )
}

export default NotesState 