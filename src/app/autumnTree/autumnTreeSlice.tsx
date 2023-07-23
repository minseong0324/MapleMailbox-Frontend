// autumnTreeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AutumnTreeState = {
  treeState: string;
  treeType: string;  // 나무의 종류를 나타내는 상태
  letterCount: number;
  senderName: string;
  letterContent: string;
};

const initialState: AutumnTreeState = {
  treeState: 'green',
  treeType: 'Maple',  // 초기 나무 종류는 'Maple'
  letterCount: 1,
  senderName: '',
  letterContent: '',
};

const autumnTreeSlice = createSlice({
  name: 'autumnTree',
  initialState,
  reducers: {
    changeTreeType: (state, action: PayloadAction<string>) => {
      state.treeType = action.payload;  // 나무 종류를 변경하는 액션
    },
    changeTreeState: (state, action: PayloadAction<string>) => {
      state.treeState = action.payload;
    },
    incrementLetterCount: (state) => {
      state.letterCount += 1;
    },
    resetLetterCount: (state) => {
      state.letterCount = 0;
    },
    sendLetter: (state, action: PayloadAction<{ senderName: string; letterContent: string }>) => {
      // 편지를 보내는 로직을 구현합니다.
      // senderName과 letterContent를 사용해서 필요한 처리를 수행합니다.
      // 예를 들어, 서버에 편지를 전송하거나 로컬 상태를 업데이트할 수 있습니다.
      state.senderName = action.payload.senderName;
      state.letterContent = action.payload.letterContent;
      // 현재 나무에 편지의 내용을 저장했습니다.
      // 편지를 서버에 저장하는 로직이 필요합니다.
    },
    resetLetter: (state, ) => {
    //resetLetter: (state, action: PayloadAction<{ senderName: string; letterContent: string }>) => {

      // 편지는 보내졌다고 가정합니다. (서버에 저장)
      // 웹에서의 편지는 초기화합니다. (이전에 작성했던 내용을 삭제합니다.)
      state.senderName = '';
      state.letterContent = '';
    },
  },
});

export const {
  resetLetter,
  changeTreeState,
  incrementLetterCount,
  resetLetterCount,
  sendLetter,
} = autumnTreeSlice.actions;

export default autumnTreeSlice.reducer;