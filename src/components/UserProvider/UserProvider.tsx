// components/UserProvider.tsx
import React, { useState } from 'react';
import UserContext from '../../contexts/UserContext';

// User 타입 정의
type User = {
    id: string;
    name: string;
    // 필요한 필드를 추가하세요.
  };

type UserProviderProps = {
  children: React.ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null); // 여기에서 useState에 제네릭을 사용하여 상태의 타입을 명시적으로 지정해줍니다.

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
