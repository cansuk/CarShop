import React from 'react'
import { Column, End, Row } from '../styled-components/Layout'

const Menu = ({ name }) => {
    return <>{name}</>

}

const NavMenu = () => {
    return (
        <End>
            <Column width="25%" justifyContent="flex-end">
                <Menu name="Purchase" />
            </Column>
            <Column width="25%" justifyContent="flex-end">
                <Menu name="My Orders" />
            </Column>
            <Column width="25%" justifyContent="flex-end">
                <Menu name="Sell" />
            </Column>
        </End>
    )
}

export default NavMenu;