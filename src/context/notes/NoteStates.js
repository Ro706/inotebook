import React from "react";
// import { useState } from "react";
import { NoteProvider } from "./noteContext";

const NoteState = (props) => {
    // const s1 = {
    //     name: "Rohit",
    //     class: "5b"
    // };
    // const [state, setState] = useState(s1);
    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //             name: "Rohit kumar Mandal",
    //             class: "6b"
    //         });
    //     }, 5000);
    // };
    return (
        <NoteProvider value={{}}>
            {props.children}
        </NoteProvider>
    );
}

export default NoteState;
