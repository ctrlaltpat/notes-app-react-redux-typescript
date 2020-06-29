import React from 'react';
import './App.css';
import Divider from '@material-ui/core/Divider';
import { NoteInput } from './NoteInput';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './notesReducer';

function App() {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const addNote = (note: string) => {
    dispatch({ type: 'ADD_NOTE', payload: note });
  };

  return (
    <div id='App'>
      <NoteInput addNote={addNote} />
      <Divider />
      <ul>
        {notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
