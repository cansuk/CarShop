import React, { MouseEventHandler } from 'react';
import { HeaderContainer } from '../styled-components/HeaderContainer';
import { End, RowContainer, Start } from '../styled-components/Layout';
import { Link } from '../styled-components/Link';
import { ResponsiveImage } from '../styled-components/ResponsiveImg';
import NavMenu from './NavMenu';
// import * as logo from '../assets/logo.png'; // TODO CANSU

const Header = () => {

    return (
        <HeaderContainer>
            <RowContainer justifyContent="center" alignItems="center">
                <Start>
                    <Link to="/home"> <ResponsiveImage src={"https://auto1-js-task-api--mufasa71.repl.co/images/logo.png"} width="200px" height="40px" /> </Link>
                </Start>
                <End>
                    <NavMenu />
                </End>
            </RowContainer>
        </HeaderContainer>

    )
}

export default Header