import React from 'react'
import { Constants } from '../constants';
import { Text } from '../styled-components/Text';
import { ColumnContainer, Container } from '../styled-components/Layout';
import { Link } from '../styled-components/Link';
import { ResponsiveImage } from '../styled-components/ResponsiveImg';
import { Padded } from '../styled-components/Spacing';
import { Variables } from '../styled-components/Variables';
import logo from '../assets/logo.png';



const NotFound = () => {
    const { messages } = Constants;
    const { notFoundMsg } = messages;
    const { Fonts } = Variables;
    const { Size, Weight } = Fonts;

    return (
        <ColumnContainer justifyContent="center" alignItems="center" height="100vh">
            <ResponsiveImage src={logo} />
            <Text size={Size.xxlarge} weight={Weight.bold}>404 - Not Found</Text>
            <Text size={Size.xlarge} weight={Weight.normal}>{notFoundMsg}</Text>
            <Text size={Size.xlarge} weight={Weight.normal}>You can always go back to the <Link to="/">homepage</Link></Text>
        </ColumnContainer>

    )
}

export default NotFound