// LetterSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Letter {
  senderName: string;
  date: string;
  letterContent: string;
}

const initialState: Letter[] = [];

const lettersSlice = createSlice({
  name: 'letters',
  initialState,
  reducers: {
    addLetter: (state, action: PayloadAction<Letter>) => {
      state.push(action.payload);
    },
  },
});

export const { addLetter } = lettersSlice.actions;

export default lettersSlice.reducer;
