import React, {createContext, useState, useEffect, useContext} from 'react'

const CartContext = createContext(null)

const Cart = (props) => {
    const [products, setProducts] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()

            const resProductsData = data.slice(0, 10)
            const resProducts = resProductsData.map(product => ({id: product.id, name: product.title, quantity: 0}))

            setProducts(resProducts)
        }

        fetchData()
    }, [])

    useEffect(() => {
        const total = products.reduce((accumulator, current) => {
            return accumulator += current.quantity 
        },0)

        setTotalQuantity(total)
    }, [products])
    
    function updateQuantity(id, quantity) {
        const productIndex = products.findIndex(product => product.id === id)
        const editedProducts = [...products]
        editedProducts[productIndex].quantity = quantity

        setProducts(editedProducts)
    }

    return (
        <CartContext.Provider value={{
            products,
            updateQuantity,
            totalQuantity
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {CartContext, Cart, useCart}