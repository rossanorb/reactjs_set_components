export type PaginationInfo = {
    currentPage: number;
    lastPage: number;
    itemsPerPage: number;
    totalPages: number;
};

interface PaginationProps {
    pagination: PaginationInfo | null;
}

const Pagination = ({ pagination }: PaginationProps) => {
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
                                <li className="page-item disabled">
                                    <a
                                        className="page-link"
                                        href="/"
                                        aria-label="Previous"
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
                                        >
                                            {i + 1}
                                        </a>
                                    </li>
                                ))}
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="/"
                                        aria-label="Next"
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
