import React from 'react';




const NoteList = ({ notes }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};

export default NoteList;