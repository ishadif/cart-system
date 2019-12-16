import React from 'react'
import { useCart } from '../providers/CartContext'
import Header from '../components/Header'
import {ProductList, ProductItem} from '../components/ProductList'
import './checkout.css'

function Checkout({handleBack}) {
    const {products, totalQuantity} = useCart()

    return (
        <div className="container">
            <Header>
                <button className="btn-transparent" onClick={handleBack}>Back</button>
                <span>total {totalQuantity}</span>
            </Header>
            <ProductList>
                {
                    products.map(product => (
                        <ProductItem key={product.id}>
                            <span className="product-name">{product.name}</span>
                            <span className="product-quantity">x{product.quantity}</span>
                        </ProductItem>
                    ))
                }
            </ProductList>
        </div>
    )
}

export default Checkout