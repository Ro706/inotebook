import React from "react";
import { NoteProvider } from "./noteContext";

const NoteState = (props) => {
    const state = {
        name: "Rohit",
        class: "5b"
    };
    
    return (
        <NoteProvider value={state}>
            {props.children}
        </NoteProvider>
    );
}

export default NoteState;
