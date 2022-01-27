/* eslint-disable no-unused-vars */
import './Header.css';
import Menus from './menus/Menus';
import TopHeader from './topheader/TopHeader';

const Header = () => {
    return (
        <>
            <TopHeader />
            <Menus />
        </>
    )
}

export default Header;
