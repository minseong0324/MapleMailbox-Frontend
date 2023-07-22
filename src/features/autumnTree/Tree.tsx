// Tree.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';  // RootState 타입을 import 합니다.
import { changeTreeState } from '../autumnTree/autumnTreeSlice';  // changeTreeState 액션을 import 합니다.

function Tree() {
  const dispatch = useDispatch();
  const letterCount = useSelector((state: RootState) => state.autumnTree.letterCount);  // letterCount를 가져옵니다.
  const treeState = useSelector((state: RootState) => state.autumnTree.treeState);  // treeState를 가져옵니다.
  const treeType = useSelector((state: RootState) => state.autumnTree.treeType);  // treeType를 가져옵니다.

  // 편지의 수가 5개 이상일 때 나무의 상태를 변경하는 함수
  useEffect(() => {
    if (letterCount >= 5) {
      dispatch(changeTreeState('changed'));  // 나무 상태를 'changed'로 변경합니다.
    }
  }, [letterCount, dispatch]);

  return (
    <div>
      <p>나무의 종류: {treeType}</p>  {/* 나무의 종류를 출력합니다.*/}
      <p>나무의 상태: {treeState}</p>
    </div>
  );
}

export default Tree;
