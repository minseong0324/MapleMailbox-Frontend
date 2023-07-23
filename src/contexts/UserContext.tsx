import React from 'react';

type User = {
  id: string;
  name: string;
  // 필요한 다른 사용자 정보를 여기에 추가합니다.
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;
