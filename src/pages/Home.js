import React from 'react'
import Header from '../components/Header'
import { useCart } from '../providers/CartContext'
import './home.css'
import { ProductList, ProductItem } from '../components/ProductList'
import Counter from '../components/Counter'

const Home = ({handleSubmit}) => {
    const {products, updateQuantity, totalQuantity} = useCart()

    return (
        <div className="container">
            <Header>
                <h1>total item {totalQuantity}</h1>
            </Header>
            <main>
                <ProductList>
                    {
                        products.map(product => (
                            <ProductItem key={product.id}>
                                <span className="product-name">{product.name}</span>
                                <Counter 
                                    quantity={product.quantity}
                                    updateQuantity={(value) => updateQuantity(product.id, value)}
                                />
                            </ProductItem>
                        ))
                    }
                </ProductList>
            </main>
            <div className="footer">
                <button className="btn-submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Home