import React from 'react'
import { Right } from '../styled-components/Layout';
import { Padded } from '../styled-components/Spacing';
import { GrLinkTop } from 'react-icons/gr';
import { Box } from '../styled-components/Box';

const Scroll = () => {
    return (
        <Right>
            <Box padding="20px" rounded shadowed cursorhand onClick={() => { window.scrollTo(0, 0); }}>

                <GrLinkTop />

            </Box>

        </Right>
    )
}

export default Scroll