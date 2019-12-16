import React from 'react'
import './productList.css'

function ProductList({children}) {
    return (
        <ul className="products">
            {children}
        </ul>
    )
}

function ProductItem({children}) {
    return (
        <li className="product-item">
            {children}
        </li>
    )
}
export {ProductList, ProductItem}