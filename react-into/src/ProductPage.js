import React from 'react'
import CartHeader from './CartHeader'
import ProductList from './ProductList'
import {CartProvider} from "./context/CartContext"
import CartList from './CartList'

function ProductPage() {
  return (
    <div>
        <CartProvider>
            <CartHeader/>
            <CartList/>
            <ProductList/>
        </CartProvider>
        
    </div>
  )
}

export default ProductPage