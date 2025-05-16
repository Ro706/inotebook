import NoteContext from "./noteContext";
import { useState } from "react";
import Alert from "../../components/Alert";

const NoteState = (props) => {
  const host = "http://localhost:5000"; // Ensure this matches backend API
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [alert, setAlert] = useState(null); // ✅ Added alert state

  // Show Alert Function
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token") || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }

      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
      showAlert("Error fetching notes", "danger");
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token") || "",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      const note = await response.json();
      setNotes((prevNotes) => [...prevNotes, note]); // ✅ Corrected state update
      showAlert("Note added successfully", "success");
    } catch (error) {
      console.error("Error adding note:", error);
      showAlert("Failed to add note", "danger");
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token") || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id)); // ✅ Efficient state update
      showAlert("Note deleted successfully", "success");
    } catch (error) {
      console.error("Error deleting note:", error);
      showAlert("Failed to delete note", "danger");
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token") || "",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to update note");
      }

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        )
      );
      showAlert("Note updated successfully", "success");
    } catch (error) {
      console.error("Error updating note:", error);
      showAlert("Failed to update note", "danger");
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {alert && <Alert message={alert.message} type={alert.type} />} {/* ✅ Show alert */}
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;