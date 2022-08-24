import React from 'react';
import { usePagination, DOTS } from '../../hook/usePagination';
import styled from 'styled-components';
import classnames from 'classnames';

const PaginationContainer = styled.ul`
  color: #fff;
  display: flex;
  list-style-type: none;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 0;
  li {
    background: #656464;
    padding: 5px 15px;
    border: 1px solid #a59191;
    cursor: pointer;
    &.selected {
      background: #000;
      cursor: text;
      &:hover {
        background: #000;
      }
    }
    &.disabled {
      cursor: not-allowed;
    }
    &.dots {
      cursor: text;
    }
    &:hover {
      background: #9c9696;
    }
  }
`;

const Pagination = (props: any) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <PaginationContainer>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" /> Prev
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className="pagination-item dots">
                ......
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={classnames('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" /> Next
      </li>
    </PaginationContainer>
  );
};

export default Pagination;
