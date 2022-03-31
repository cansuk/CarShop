import React from 'react'
import { Font } from './Text'
import { ColumnContainer } from './Layout'
import { Link } from './Link';
import { Variables } from './Variables';

const MyOrders = () => {
    const { Fonts } = Variables;
    const { Size, Weight } = Fonts;

    return (
        <ColumnContainer justifyContent="center" alignItems="center" height="100vh">
            <Font size={Size.xxlarge} weight={Weight.bold}>Under construction</Font>
            <Font size={Size.xlarge} weight={Weight.normal}>You can always go back to the <Link to="/">homepage</Link></Font>
        </ColumnContainer>
    )
}

export default MyOrders;