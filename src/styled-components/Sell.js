import React from 'react'
import { Font } from '../styled-components/Text'
import { ColumnContainer } from '../styled-components/Layout'
import { Link } from '../styled-components/Link';
import { Variables } from '../styled-components/Variables';

const Sell = () => {
    const { Fonts } = Variables;
    const { Size, Weight } = Fonts;

    return (
        <ColumnContainer justifyContent="center" alignItems="center" height="100vh">
            <Font size={Size.xxlarge} weight={Weight.bold}>Under construction</Font>
            <Font size={Size.xlarge} weight={Weight.normal}>You can always go back to the <Link to="/">homepage</Link></Font>
        </ColumnContainer>
    )
}

export default Sell;
