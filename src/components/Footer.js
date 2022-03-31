import React from 'react';
import { Box } from '../styled-components/Box';
import { Container, RowContainer } from '../styled-components/Layout';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
    return (
        <Container height="100px">
            <RowContainer justifyContent="center" alignItems="center"> <BiCopyright /> {"AUTO1 Group 2022"} </RowContainer>
        </Container>
    )
}

export default Footer