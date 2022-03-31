import { useReducer } from "react";
import { MdFirstPage, MdLastPage, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "../styled-components/Button";
import { Container } from "../styled-components/Layout";
import { Link } from '../styled-components/Link';
import { Font, Text } from '../styled-components/Text'
import { Variables } from "../styled-components/Variables";
// import { Button } from "../../styled-components/Button";
// import { colors } from "../../styled-components/Variables";
// import { Row } from "../../styled-components/Layout";
// import { Container } from "../../styled-components/Containers";


export const Paginator = ({ defaultActivePage, totalPages, handlePaginationChange }) => {
    const { Fonts } = Variables;
    const { Size, Weight } = Fonts;

    const initialState = {
        pageIndex: defaultActivePage,
        disabled: {
            firstPage: true,
            prevPage: true,
            nextPage: totalPages === 1 ? true : false,
            lastPage: totalPages === 1 ? true : false
        }
    };

    const pagingReducer = (state, action) => {
        switch (action.type) {
            case 'GO_TO_PAGE':
                if (action.pageIndex === 0 || action.pageIndex > totalPages) {
                    return { ...state };
                }
                handlePaginationChange({ activePage: action.pageIndex });
                window.scrollTo(0, 0);
                switch (action.pageIndex) {
                    case 1: // if first page
                        return { ...state, pageIndex: action.pageIndex, disabled: { ...{ prevPage: true, firstPage: true, nextPage: false, lastPage: false } } };
                    case totalPages: // if last page
                        return { ...state, pageIndex: action.pageIndex, disabled: { ...{ prevPage: false, firstPage: false, nextPage: true, lastPage: true } } };
                    default: // other pages except for first and last pages
                        return { ...state, pageIndex: action.pageIndex, disabled: { ...{ prevPage: false, firstPage: false, nextPage: false, lastPage: false } } };
                }
            case 'SET_PAGE':
                return { ...state, pageIndex: action.pageIndex };
            default:
                throw new Error("Something went wrong...");
        }
    }

    const [state, dispatch] = useReducer(pagingReducer, initialState);
    const { pageIndex, disabled } = state;

    return totalPages ? <div className="pagination">
        <Container justifyContent="center">

            <Text linkView onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: 1 })} disabled={disabled.firstPage}>
                First
            </Text>

            <Text linkView onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex - 1 })} disabled={disabled.prevPage}>
                Previous
            </Text>

            <Text color={Variables.Colors.fontColor}>
                Page {pageIndex} of {totalPages}
            </Text>

            <Text linkView onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex + 1 })} disabled={disabled.nextPage}>
                Next
            </Text>

            <Text linkView onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: totalPages })} disabled={disabled.lastPage}>
                Last
            </Text>
        </Container>


    </div>
        :
        <></>
}