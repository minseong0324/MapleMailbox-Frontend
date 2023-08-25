import { ReactNode } from 'react';
type TokenContextType = {
    accessToken: string | null;
    refreshToken: string | null;
};
interface TokenProviderProps {
    children: ReactNode;
}
declare function TokenProvider({ children }: TokenProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useToken(): TokenContextType;
export default TokenProvider;
