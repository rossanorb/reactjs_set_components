const Paginate = ({ paginate, parentPage, perPage }) => {

    const goToPage = (event) => {
        event.preventDefault();
        parentPage(+event.target.innerText)
    }

    const links = () => {
        const links = []

        for (let i = 1; i <= paginate.last_page; i++) {
            links.push(<li key={i} className="page-item" onClick={goToPage} ><a className={i === paginate.current_page ? 'page-link active' : 'page-link'} href={'page=' + i}>{i}</a></li>)
        }

        return links
    }

    const next = (event) => {
        event.preventDefault();
        let page = paginate.current_page + 1;
        if (page > paginate.last_page) page = paginate.last_page;
        parentPage(page)
    }

    const previous = (event) => {
        event.preventDefault();
        let page = paginate.current_page - 1;
        if (page < 1) page = 1;
        parentPage(page)
    }

    return (
        <div className="row">
            <div className="col-sm-12 col-md-4">
                <div style={{display:'flex', flexFlow:"row nowrap"}}>
                    <div>show</div>
                    <div style={{marginLeft:10, marginRight:10}}>
                        <select onChange={(e) => perPage(e.target.value)} className="custom-select custom-select-sm form-control form-control-sm">
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
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className={paginate.current_page === 1 ? 'page-item disabled' : 'page-item'} >
                            <a className="page-link" href="/" onClick={previous} aria-label="Previous">
                                <span aria-hidden="true">&lt;</span>
                            </a>
                        </li>
                        {links()}
                        <li className={paginate.current_page === paginate.last_page ? 'page-item disabled' : 'page-item'}>
                            <a className="page-link" href="/" onClick={next} aria-label="Next">
                                <span aria-hidden="true">&gt;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Paginate

