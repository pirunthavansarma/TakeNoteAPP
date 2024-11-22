import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note) return;  // Prevent adding an empty note
    addNote(note);  // Call the addNote function passed as a prop
    setNote('');  // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter a new note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;



