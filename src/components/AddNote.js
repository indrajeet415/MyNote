import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [NoteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    // console.log(event.target.value);
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (NoteText.trim().length > 0) {
      handleAddNote(NoteText);
      setNoteText("");
    }
  };

  return (
    <div className="note-new">
      <textarea
        rows="8"
        cols="10"
        placeholder="type to add note..."
        value={NoteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - NoteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
