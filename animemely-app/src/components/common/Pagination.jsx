import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/pagination.css";

function Pagination(props) {
  return (
    <nav >
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" aria-disabled="true">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
