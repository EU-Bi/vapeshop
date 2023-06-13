import React from 'react'
import './Pagination.scss'

const Pagination = () => {
    const arr =  [1,2,3,4,'...']
  return (
    <nav>
        <ul className='wrapperPagination'>
            <li>
                <div className="prevPagination"></div>
            </li>
            {
                arr.map((page, index)=>(
                    <li key={index}>
                        <div className="page-item">{page}</div>
                    </li>
                ))
            }
            <li>
                <div className="nextPagination"></div>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination