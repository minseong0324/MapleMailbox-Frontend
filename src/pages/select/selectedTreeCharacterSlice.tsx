import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit의 createSlice 함수를 사용하여 Redux slice를 생성합니다.
// 이 slice는 선택된 나무와 캐릭터의 상태를 관리합니다.
export const selectedTreeCharacterSlice = createSlice({
  name: 'selectedTreeCharacter', // slice의 이름입니다.
  initialState: { // slice의 초기 상태입니다.
    tree: 'Maple Tree', // 초기에 선택된 나무는 'Maple Tree'입니다.
    character: 'Maple Character' // 초기에 선택된 캐릭터는 'Maple Character'입니다.
  },
  reducers: { // 이 slice에서 사용할 액션 생성 함수와 리듀서를 정의합니다.
    setTree: (state, action) => { // 선택된 나무를 변경하는 액션 생성 함수입니다.
      state.tree = action.payload; // 선택된 나무의 상태를 액션의 payload로 변경합니다.
    },
    setCharacter: (state, action) => { // 선택된 캐릭터를 변경하는 액션 생성 함수입니다.
      state.character = action.payload; // 선택된 캐릭터의 상태를 액션의 payload로 변경합니다.
    }
  }
});

// 액션 생성 함수를 export하여 컴포넌트에서 사용할 수 있게 합니다.
export const { setTree, setCharacter } = selectedTreeCharacterSlice.actions;

// 리듀서를 export하여 store에서 사용할 수 있게 합니다.
export default selectedTreeCharacterSlice.reducer;
