import React from 'react';
import { useToggle } from '../hooks/useToggle';
import { RowContainer } from '../styled-components/Layout';
import { Collasible as CollapsibleStyled } from '../styled-components/Collabsible';

type Props = {
    item: HTMLElement,
    itemContent: HTMLElement,
    initialCollapsed: Boolean,
    collapseIcon: HTMLElement,
    expandIcon: HTMLElement
}

const Collapsible = ({ item, itemContent, initialCollapsed, collapseIcon, expandIcon }: Props) => {
    const [collapsed, collapseActions] = useToggle(initialCollapsed, [true, false]);
    const { CollapsibleItem, CollapsibleItemContent } = CollapsibleStyled;

    const handleCollapse = () => {
        collapseActions.toggle(collapsed);
    }
    return (<>
        <CollapsibleItem onClick={handleCollapse}>
            <RowContainer justifyContent={"space-between"}> {item}  {collapsed ? collapseIcon : expandIcon}  </RowContainer>
        </CollapsibleItem>
        <CollapsibleItemContent style={{ display: collapsed ? "block" : "none" }}>
            {itemContent}
        </CollapsibleItemContent>
    </>
    );
}

export default Collapsible;