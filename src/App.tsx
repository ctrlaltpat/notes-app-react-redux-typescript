import React from 'react';
import './App.css';
import Divider from '@material-ui/core/Divider';
import { NoteInput } from './components/NoteInput';
import { NotesList } from './components/NotesList';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './reducers/notesReducer';
import { addNote } from './actions/actions';

function App() {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const addNewNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div id='App'>
      <NoteInput addNote={addNewNote} />
      <Divider />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
