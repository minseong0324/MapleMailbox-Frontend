import React from 'react';
type User = {
    id: string;
    name: string;
};
type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
declare const UserContext: React.Context<UserContextType | undefined>;
export default UserContext;
