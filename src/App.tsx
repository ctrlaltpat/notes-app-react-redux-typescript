import React from 'react';
import './App.css';
import Divider from '@material-ui/core/Divider';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NotesList';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './reducers/notesReducer';

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
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
