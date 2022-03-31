import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Constants } from '../constants';
import { Column, End, Row, RowContainer } from '../styled-components/Layout'
import { MenuLink } from '../styled-components/Link';
import { setActiveMenu } from '../redux/reducers/mainReducer';

const NavMenu = () => {
    const dispatch = useDispatch();
    const activeItem = useSelector(state => state.mainReducer.activeNavMenu);
    let navigate = useNavigate();
    const { routeKeys } = Constants;


    const handleItemClick = (e) => {
        const { name } = e.target;
        dispatch(setActiveMenu({ name }));
        navigate(`/${name}`);
    };


    return (
        <RowContainer justifyContent="flex-end" alignItems="center">
            <MenuLink to="/purchase" name={routeKeys.purchase} active={activeItem === routeKeys.purchase} onClick={handleItemClick}>
                Purchase
            </MenuLink>
            <MenuLink to="/orders" name={routeKeys.orders} active={activeItem === routeKeys.orders} onClick={handleItemClick}>
                My Orders
            </MenuLink>
            <MenuLink to="/sell" name={routeKeys.sell} active={activeItem === routeKeys.sell} onClick={handleItemClick}>
                Sell
            </MenuLink>
        </RowContainer>
    )
}

export default NavMenu;