import React, { Children, useState, MouseEventHandler } from 'react'
import shortid from 'shortid'
import { ColumnContainer } from '../styled-components/Layout'
import Collapsible from './Collapsible'

type Props = {
    onChange: MouseEventHandler,
    label: String,
    options: Array,
    grouped: Boolean,
    multiple: Boolean
}

const SelectCheckbox = ({ label, options, grouped, onChange, multiple = false }: Props) => {
    const handleCheck = (e) => {
        e.stopPropagation();
        console.log(e.target.name, e.target.checked);
        const { value, checked } = e.target;
        const subOptions: NodeListOf<Element> = document.querySelectorAll(`*[data-parent='${value}']`);
        subOptions.forEach(subOption => { subOption.checked = checked; });
        if (checked) {
            //   setCheckedItems([...value])
        }

        onChange(e);
    }

    return (
        <ColumnContainer>
            {label}

            {grouped ? options.map(option =>
                <Collapsible initialCollapsed={false} key={shortid.generate()}
                    item={
                        <div>
                            {/* <input type="checkbox" name={option.name} key={shortid.generate()} onClick={handleCheck} /> */}
                            <input type="checkbox" value={option.name} name={label} key={shortid.generate()} onChange={handleCheck}
                                // checked={() => getChecked(option.name)} 
                                checked={option.checked}
                            />
                            <label htmlFor={option.name}>{option.name}</label>
                        </div>
                    }
                    itemContent={
                        option.models?.map(model =>
                            <div key={shortid.generate()}>
                                <input type="checkbox" label={model.name} key={shortid.generate()} data-parent={option.name} disabled checked={option.checked} />
                                <label htmlFor={model.name}>{model.name}</label>
                            </div>
                        )
                    } />

            )
                :
                <>todo cansu</>
            }

        </ColumnContainer>
    )
}

export default SelectCheckbox