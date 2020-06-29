import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import TripOriginIcon from '@material-ui/icons/TripOrigin';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    _root: {
      width: '300px',
    },
  })
);

interface Notes {
  notes: string[];
}

export const NotesList: React.FC<Notes> = ({ notes }) => {
  const styles = useStyles();
  return (
    <List dense={true} className={styles._root}>
      {notes.map((note: string, i) => (
        <ListItem key={i}>
          <ListItemIcon>
            <TripOriginIcon color={'primary'} />
          </ListItemIcon>
          <ListItemText primary={note} />
        </ListItem>
      ))}
    </List>
  );
};
