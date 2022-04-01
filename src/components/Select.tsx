import React from 'react'
import shortid from 'shortid';
import { Column, RowContainer } from '../styled-components/Layout';
import { Select as StyledSelect } from '../styled-components/Select.tsx';

const Select = ({ label, options, onChange, multiple = false }) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <StyledSelect multiple={multiple} name={label} onChange={onChange}>
                {options.map(option => <option value={option.value} key={shortid.generate()} selected={option.selected} >{option.text} </option>)}
            </StyledSelect>
        </>
    )
}

export default Select;