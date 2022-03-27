import React from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useToggle } from '../hooks/useToggle';
import { RowContainer } from '../styled-components/Layout';
import { Collasible as CollapsibleStyled } from '../styled-components/Collabsible';


const Collapsible = ({ item, itemContent, initialCollapsed }) => {
    const [collapsed, collapseActions] = useToggle(initialCollapsed, [true, false]);
    const { CollapsibleItem, CollapsibleItemContent } = CollapsibleStyled;

    const handleCollapse = () => {
        collapseActions.toggle(collapsed);
    }
    return (<>
        <CollapsibleItem onClick={handleCollapse}>
            <RowContainer justifyContent={"space-between"}> {item}  {collapsed ? <AiOutlineMinus /> : <AiOutlinePlus />}  </RowContainer>
        </CollapsibleItem>
        <CollapsibleItemContent style={{ display: collapsed ? "block" : "none" }}>
            {itemContent}
        </CollapsibleItemContent>
    </>
    );
}

export default Collapsible;