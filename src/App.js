import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [note, setNote] = useState([
    {
      id: nanoid(),
      text: "this is first note ",
      date: "02/06/2024",
    },

    {
      id: nanoid(),
      text: "this is second note",
      date: "03/06/2024",
    },

    {
      id: nanoid(),
      text: "this is third note",
      date: "03/06/2024",
    },

    {
      id: nanoid(),
      text: "this is fourth note",
      date: "04/06/2024",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saveNote = JSON.parse(localStorage.getItem("react-note-app-data"));

    if (saveNote) {
      setNote(saveNote);
    }
  }, []);

  useEffect(() => {
    localStorage.getItem("react-nnote-app-data", JSON.stringify(note));
  }, [note]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...note, newNote];
    setNote(newNotes);
  };

  const deleteNote = (id) => {
    const newNote = note.filter((note) => note.id !== id);
    setNote(newNote);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          note={note.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
