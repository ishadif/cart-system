import React from 'react'
import './counter.css'

function Counter({quantity, updateQuantity}) {
    return (
        <div className="counter">
            <button onClick={() => quantity > 0 && updateQuantity(quantity - 1)}>-</button>
            <label htmlFor="quantity">
                <input 
                    name="quantity"
                    type="text" 
                    value={quantity}
                    onChange={({target}) => updateQuantity(Number(target.value))}
                />
            </label>
            <button onClick={() => updateQuantity(quantity + 1)}>+</button>
        </div>
    )
}

export default Counter