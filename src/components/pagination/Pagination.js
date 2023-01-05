import React from 'react'
import ReactPaginate from 'react-paginate'

import "./pagination.scss"
export const Pagination = ({pagecaunts ,cauntpage,paginations}) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-5 gap-3"
      forcePage={paginations === 1 ? 0 : paginations -1}
      pageCount={pagecaunts}
      previousLabel={">"}
      nextLabel={"<"}
      previousLinkClassName="page-link page-left bg-primary "
      nextLinkClassName="page-link page-right bg-primary"
      pageClassName='page-items '
      pageLinkClassName='page-links '
      activeClassName='active'
      onPageChange={(item)=>{cauntpage(item.selected + 1)}}
    />
  )
}
