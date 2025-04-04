import { createContext } from "react";

const  noteContext = createContext();

export default noteContext;
export const NoteProvider = noteContext.Provider;
