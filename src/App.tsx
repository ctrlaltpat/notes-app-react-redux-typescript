import React from 'react';
import './App.css';
import { NoteInput } from './NoteInput';

function App() {
  return (
    <div id='App'>
      <NoteInput addNote={() => console.log('note added')} />
    </div>
  );
}

export default App;
