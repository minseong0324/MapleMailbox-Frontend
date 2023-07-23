// Home.tsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import OwnerHome from './OwnerHome/OwnerHome';
import VisitorHome from './VisitorHome/VisitorHome';
import UserContext from '../../contexts/UserContext'; // UserContext를 import합니다.

function Home() {
  const { userId } = useParams<{ userId: string }>();
  const userContext = useContext(UserContext); // 현재 로그인한 사용자의 정보를 가져옵니다.

  if (!userContext) {
    throw new Error('UserContext not found');
  }

  const { user } = userContext;

  if (user && user.id === userId) {
    // 현재 로그인한 사용자와 페이지의 주인이 같으면 OwnerHome을 렌더링합니다.
    return <OwnerHome />;
  } else {
    // 현재 로그인한 사용자와 페이지의 주인이 다르면 VisitorHome을 렌더링합니다.
    return <VisitorHome />;
  }
}

export default Home;
