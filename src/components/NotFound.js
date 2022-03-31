import React from 'react'
import { Constants } from '../constants'
import { Font } from '../styled-components/Text'
import { ColumnContainer, Container } from '../styled-components/Layout'
import { Link } from '../styled-components/Link'
import { ResponsiveImage } from '../styled-components/ResponsiveImg'
import { Padded } from '../styled-components/Spacing'
import { Variables } from '../styled-components/Variables'



const NotFound = () => {
    const { messages } = Constants;
    const { notFoundMsg } = messages;
    const { Fonts } = Variables;
    const { Size, Weight } = Fonts;

    return (
        <ColumnContainer justifyContent="center" alignItems="center" height="100vh">
            <ResponsiveImage src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png" />
            <Font size={Size.xxlarge} weight={Weight.bold}>404 - Not Found</Font>
            <Font size={Size.xlarge} weight={Weight.normal}>{notFoundMsg}</Font>
            <Font size={Size.xlarge} weight={Weight.normal}>You can always go back to the <Link to="/">homepage</Link></Font>
        </ColumnContainer>

    )
}

export default NotFound