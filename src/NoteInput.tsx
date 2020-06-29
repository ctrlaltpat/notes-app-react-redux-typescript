import React from 'react';
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

export const NoteInput = () => {
  const { ...styles } = useStyles();
  return (
    <div className={styles._root}>
      <TextField
        className={styles._input}
        name='note'
        label='Note'
        variant='outlined'
      />
      <Button className={styles._button} variant='contained' color='primary'>
        Add Note
      </Button>
    </div>
  );
};
