import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState('');


  //event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note) return;
    addNote(note);
    setNote('');
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
