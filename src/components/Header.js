import React from 'react';
import { HeaderContainer } from '../styled-components/HeaderContainer';
import { End, FlexGrow1, RowContainer, Start } from '../styled-components/Layout';
import { ResponsiveImage } from '../styled-components/ResponsiveImg';
import NavMenu from './NavMenu';

const Header = () => {

    return (
        <HeaderContainer>
            <RowContainer>
                <Start>
                    <ResponsiveImage src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png" />
                </Start>

                <End>
                    <NavMenu />
                </End>
            </RowContainer>
        </HeaderContainer>

    )
}

export default Header