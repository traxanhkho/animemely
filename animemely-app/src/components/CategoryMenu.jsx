import React from 'react';
import "../style/categoryMenu.css" ; 

function CategoryMenu(props) {
    return (
        <div className='category-menu'>
            <h2>Thể loại</h2>
            <div className="container-box">
                <a href="#">dat dep trai vai dai ok babe</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#">8</a>
            </div>
        </div>
    );
}

export default CategoryMenu;