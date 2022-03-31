import React, { MouseEventHandler } from 'react';
import { HeaderContainer } from '../styled-components/HeaderContainer';
import { End, FlexGrow1, RowContainer, Start } from '../styled-components/Layout';
import { Link } from '../styled-components/Link';
import { ResponsiveImage } from '../styled-components/ResponsiveImg';
import logo from '../assets/logo.png';
import NavMenu from './NavMenu';

const Header = () => {

    return (
        <HeaderContainer>
            <RowContainer justifyContent="center" alignItems="center">
                <Start>
                    <Link to="/home"> <ResponsiveImage src={logo} width="200px" height="40px" /> </Link>
                </Start>
                <End>
                    <NavMenu />
                </End>
            </RowContainer>
        </HeaderContainer>

    )
}

export default Header