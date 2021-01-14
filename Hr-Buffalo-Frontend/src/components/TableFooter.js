import React from "react";



const defaultProps = {
  initialPage: 1
}

class TableFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  // componentWillMount() {
  //   // set page if items array isn't empty
  //   if (this.props.items && this.props.items.length) {
  //     this.setPage(this.props.initialPage);
  //   }
  // }

  componentDidUpdate(prevProps) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    var items = this.props.items;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, 10, 10);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 3) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    var pager = this.state.pager;
    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <div className="card-footer d-flex justify-content-between">
        <div>
          <span
          style={{ border: "none" }}
          className="align-middle">
          Showing <b>{pager.startIndex + 1}</b>  to  <b>{pager.endIndex + 1}</b>  of <b>{pager.totalItems}</b> results
            </span>
          </div>
        <div className="d-flex">
          <button
            type="button"
            className={`btn btn-sm mr-2 ${pager.currentPage === 1 ? 'disabled' : ''}`}
            style={{ boxShadow: "none" }}
            onClick={() => this.setPage(1)}>
            {"<<"}
          </button>
          <ul className="pagination">
            <li>
              <span
                className={`${pager.currentPage <= 2 || pager.totalPages <= 3 ? 'd-none' : ''}`}
                onClick={() => this.setPage(pager.currentPage - 1)}
              >
                ...
                </span>
            </li>
            {pager.pages.map((page, index) =>
              <li key={index} className={`btn btn-sm ${pager.currentPage === page ? 'active' : ''}`}>
                <span onClick={() => this.setPage(page)}>{page}</span>
              </li>
            )}
            <li>
              <span
                className={`${pager.currentPage >= (pager.totalPages - 1) ? 'd-none' : ''}`}
                onClick={() => this.setPage(pager.currentPage + 1)}
              >
                ...
                </span>
            </li>
          </ul>
          <button
            type="button"
            className={`btn btn-sm ml-2 ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}
            style={{ boxShadow: "none" }}
            onClick={() => this.setPage(pager.totalPages)}>
            {">>"}
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`btn border-secondary btn-sm mr-2 ${pager.currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => this.setPage(pager.currentPage - 1)}>
            Previous
          </button>
          <button
            type="button"
            className={`btn border-secondary btn-sm mr-2 ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}
            onClick={() => this.setPage(pager.currentPage + 1)}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

TableFooter.defaultProps = defaultProps;
export default TableFooter;
