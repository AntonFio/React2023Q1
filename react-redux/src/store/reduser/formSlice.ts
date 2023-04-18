import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

enum GenderEnum {
  Minsk = 'Minsk',
  Russia = 'Russia',
  Ukraine = 'Ukraine',
  Default = 'Default',
}

interface IFormInput {
  valueName: string;
  valueDate: string;
  valueSelect: GenderEnum;
  valueCheckbox: boolean;
  valueRadio: boolean;
  image: string;
}

interface IFormState {
  cards: Array<IFormInput>;
}

const formInitialState: IFormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState: formInitialState,
  reducers: {
    addCard(state, action: PayloadAction<{ card: IFormInput }>) {
      state.cards.push(action.payload.card);
    },
  },
});

export const { addCard } = formSlice.actions;
export default formSlice.reducer;
