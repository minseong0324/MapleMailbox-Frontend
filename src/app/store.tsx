//store.tsx
import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import autumnTreeReducer from './autumnTree/autumnTreeSlice';
import selectedTreeCharacterReducer from '../pages/select/selectedTreeCharacterSlice';
import lettersReducer from '../pages/letters/LettersSlice'

type Action = {
  type: string;
  payload?: unknown;
};

// 나무의 상태를 관리하는 리듀서
function treeReducer(state = { state: 'initial' }, action: Action) {
  switch (action.type) {
    case 'tree/changeState':
      return { ...state, state: action.payload };
    default:
      return state;
  }
}

// 선택된 나무와 캐릭터를 관리하는 리듀서
function selectionReducer(state = { tree: '', character: '' }, action: Action) {
  switch (action.type) {
    case 'selection/selectTree':
      return { ...state, tree: action.payload };
    case 'selection/selectCharacter':
      return { ...state, character: action.payload };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  autumnTree: autumnTreeReducer,
  selectedTreeCharacter: selectedTreeCharacterReducer,
  letters: lettersReducer,
  tree: treeReducer,
  selection: selectionReducer,
});

const store = configureStore({
  reducer: {
    autumnTree: autumnTreeReducer,
    selectedTreeCharacter: selectedTreeCharacterReducer,
    letters: lettersReducer,
  },
  // 초기 상태를 설정합니다.
  preloadedState: {
    selectedTreeCharacter: {
      tree: 'Maple Tree',
      character: 'Maple Character'
    }
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;