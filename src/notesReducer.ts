interface NotesState {
  // notes: Array<string>
  notes: string[];
}

const initialState = {
  notes: [],
};

type Action = {
  type: 'ADD_NOTE';
  payload: string;
};

export const notesReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  // sTaTe Is ThE pReViOuS state 'vAlUe'; aCtIoN iS aN eVeNt CoNtAiNiNg ThE dAtA tO cAlCuLaTe ThE sTaTe
  switch (action.type) {
    case 'ADD_NOTE': {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};
