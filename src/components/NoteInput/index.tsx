import React, { useState, ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    _root: {
      display: 'block',
      width: '300px',
    },
    _input: {
      width: '100%',
    },
    _button: {
      marginTop: '.5rem',
    },
  })
);

interface NoteInputProps {
  // addNote(note: string): void;
  addNote: (note: string) => void;
}

export const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
  const { ...styles } = useStyles();

  const [note, setNote] = useState('');

  const upDateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleClick = () => {
    addNote(note);
    setNote('');
  };

  return (
    <div className={styles._root}>
      <TextField
        className={styles._input}
        name='note'
        label='Note'
        variant='outlined'
        value={note}
        onChange={upDateNote}
      />
      <Button
        className={styles._button}
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        Add Note
      </Button>
    </div>
  );
};
