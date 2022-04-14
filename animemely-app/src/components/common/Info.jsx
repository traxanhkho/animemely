import React from "react";

function renderItem(category, content) {
  return (
    <li className="info-item">
      <h4>{category}</h4>
      <p>{content}</p>
    </li>
  );
}

function renderNav() {
  return (
    <div className="info-nav">
      <button>
        <i class="fa fa-play" aria-hidden="true"></i>
      </button>
      <button>
        <i class="fa fa-bookmark" aria-hidden="true"></i>
      </button>
      <button>
        <i class="fa fa-star" aria-hidden="true"></i>
      </button>
    </div>
  );
}


export default {
    renderItem , 
    renderNav
};
