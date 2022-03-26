import {useContext} from 'react'
import CartContext from './context/CartContext'

function CartHeader() {
    const {cart}=useContext(CartContext)

  return (
    <h1>Cart Count: {cart.length}</h1>
  )
}

export default CartHeader