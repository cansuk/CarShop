import React from 'react';
import { HeaderContainer } from '../styled-components/HeaderContainer';
import { End, FlexGrow1, RowContainer, Start } from '../styled-components/Layout';
import { Link } from '../styled-components/Link';
import { ResponsiveImage } from '../styled-components/ResponsiveImg';
import NavMenu from './NavMenu';

const Header = () => {

    return (
        <HeaderContainer>
            <RowContainer>
                <Start>
                    {/* TODO CANSU : UNCOMMENT <ResponsiveImage src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png" /> */}
                    <ResponsiveImage src="asd" />
                    <Link to="/home"> <ResponsiveImage src="smiley.gif" alt="logo" /> </Link>
                </Start>

                <End>
                    <NavMenu />
                </End>
            </RowContainer>
        </HeaderContainer>

    )
}

export default Header