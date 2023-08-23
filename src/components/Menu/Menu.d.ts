import React from 'react';
interface MenuProps {
    onLogout: () => void;
    onServiceDescription: () => void;
    nowDate: number | null;
}
declare const Menu: React.FC<MenuProps>;
export default Menu;
