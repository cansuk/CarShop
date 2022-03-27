import React from 'react'
import { Constants } from '../constants'
import { Box } from '../styled-components/Box'
import Select from './Select'

const SortBox = ({ options, onSort }) => {

    return (
        <Select options={options} label={"Sort By"} onChange={onSort} />
    );
}

export default SortBox