import { useReducer } from "react";
import { MdFirstPage, MdLastPage, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "../styled-components/Button";
import { Container } from "../styled-components/Layout";
// import { Button } from "../../styled-components/Button";
// import { colors } from "../../styled-components/Variables";
// import { Row } from "../../styled-components/Layout";
// import { Container } from "../../styled-components/Containers";


export const Paginator = ({ defaultActivePage, totalPages, handlePaginationChange }) => {

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
        <Container>
            <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: 1 })} disabled={disabled.firstPage}>
                <MdFirstPage />
            </button>
            <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex - 1 })} disabled={disabled.prevPage}>
                <MdNavigateBefore />
            </button>
            <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex + 1 })} disabled={disabled.nextPage}>
                <MdNavigateNext />
            </button>
            <button onClick={() => dispatch({ type: 'GO_TO_PAGE', pageIndex: totalPages })} disabled={disabled.lastPage}>
                <MdLastPage />
            </button>
            <span>
                Page <strong>
                    {pageIndex} of {totalPages}
                </strong>
            </span>

            | Go to page:
            {/* <input
                readOnly={totalPages === 1}
                type="number"
                max={3}
                defaultValue={pageIndex}
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) : 1
                    dispatch({ type: 'SET_PAGE', pageIndex: page });
                }}
                style={{ width: '100px' }}
            /> */}

            <> {pageIndex} <input type="range" min="1" max="3" step="1" readOnly={totalPages === 1}
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) : 1
                    dispatch({ type: 'SET_PAGE', pageIndex: page });
                }} />
            </>
            <Button onClick={() => {
                dispatch({ type: 'GO_TO_PAGE', pageIndex: pageIndex });
            }}> Go  </Button>

            <Button onClick={() => { window.scrollTo(0, 0); }}> Scroll to top  </Button>


        </Container>


    </div>
        :
        <></>
}