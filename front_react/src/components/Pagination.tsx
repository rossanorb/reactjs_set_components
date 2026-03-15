export type PaginationInfo = {
    currentPage: number;
    lastPage: number;
    itemsPerPage: number;
    totalPages: number;
};

interface PaginationProps {
    pagination: PaginationInfo;
    changePage: (current_page: number) => void;
}

const Pagination = ( props : PaginationProps) => {
    const { pagination, changePage } = props;

    const next = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (pagination.currentPage < pagination.lastPage) {
            changePage(pagination.currentPage + 1);
        }
    }

    const previous = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (pagination.currentPage > 1) {
            changePage(pagination.currentPage - 1);
        }
    }

    const goToPage = (event: React.MouseEvent<HTMLAnchorElement>, page: number) => {
        event.preventDefault();
        changePage(page);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div style={{ display: 'flex', flexFlow: 'row' }}>
                            <div>show</div>
                            <div style={{ marginLeft: 10, marginRight: 10 }}>
                                <select className="custom-select custom-select-sm form-control form-control-sm">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                            </div>
                            <div>per page</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <nav style={{ overflowX: 'auto' }}>
                            <ul className="pagination justify-content-start flex-wrap">
                                <li className={pagination.currentPage === 1 ? 'page-item disabled' : 'page-item'} >
                                    <a
                                        className="page-link"
                                        href={`page=${pagination.currentPage - 1}`}
                                        aria-label="Previous"
                                        onClick={previous}
                                    >
                                        <span aria-hidden="true">&lt;</span>
                                    </a>
                                </li>
                                {pagination && Array.from({ length: pagination.lastPage }, (_, i) => (
                                    <li
                                        className={`page-item ${i === pagination.currentPage - 1 ? 'active' : ''}`}
                                        key={i + 1}
                                    >
                                        <a
                                            className="page-link"
                                            href={`page=${i + 1}`}
                                            onClick={(event) => goToPage(event, i + 1)}
                                        >
                                            {i + 1}
                                        </a>
                                    </li>
                                ))}
                                <li className={pagination.currentPage === pagination.lastPage ? 'page-item disabled' : 'page-item'} >
                                    <a
                                        className="page-link"
                                        href={`page=${pagination.currentPage + 1}`}
                                        aria-label="Next"
                                        onClick={next}
                                    >
                                        <span aria-hidden="true">&gt;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
