import React, { MouseEventHandler } from 'react'
import { Constants } from '../constants'
import { Box } from '../styled-components/Box'
import { Container, Right } from '../styled-components/Layout'
import Select from './Select'

type Props = {
    onSort: MouseEventHandler,
    options: [],
}

const SortBox = ({ options, onSort }: Props) => {

    return (
        <Container alignItems="center" gap="8px">
            <Select options={options} label={"Sort By"} onChange={onSort} />
        </Container>
    );
}

export default SortBox