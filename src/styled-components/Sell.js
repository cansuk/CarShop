import React from 'react'
import { Text } from '../styled-components/Text'
import { ColumnContainer } from '../styled-components/Layout'
import { Link } from '../styled-components/Link';
import { Variables } from '../styled-components/Variables';

const Sell = () => {
    const { Fonts } = Variables;
    const { Size, Weight } = Fonts;

    return (
        <ColumnContainer justifyContent="center" alignItems="center" height="100vh">
            <Text size={Size.xxlarge} weight={Weight.bold}>Under construction</Text>
            <Text size={Size.xlarge} weight={Weight.normal}>You can always go back to the <Link to="/">homepage</Link></Text>
        </ColumnContainer>
    )
}

export default Sell;
