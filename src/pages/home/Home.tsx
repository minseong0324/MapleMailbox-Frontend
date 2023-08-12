import React from 'react';
import { useParams } from 'react-router-dom';
import OwnerHome from './OwnerHome/OwnerHome';
import VisitorHome from './VisitorHome/VisitorHome';

function Home() {
  const { userId } = useParams<{ userId: string }>();

  // localStorage에서 현재 로그인한 사용자의 ID를 가져옵니다.
  const loggedInUserId = localStorage.getItem('userId');

  if (loggedInUserId === userId) {
    // 현재 로그인한 사용자와 페이지의 주인이 같으면 OwnerHome을 렌더링합니다.
    return <OwnerHome />;
  } else {
    // 현재 로그인한 사용자와 페이지의 주인이 다르면 VisitorHome을 렌더링합니다.
    return <VisitorHome />;
  }
}

export default Home;
