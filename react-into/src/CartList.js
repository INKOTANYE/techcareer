import {useContext, useState, useEffect} from 'react'
import CartContext from "./context/CartContext"

function CartList() {
    const {cart, setCart}=useContext(CartContext)
    const [total, setTotal]=useState(0)

    useEffect(()=>{
        let totalPrice=cart.map((q)=>q.price)
        var sum=0     
        for (let i = 0; i < totalPrice.length; i++) {
            sum += totalPrice[i]        
        }
        setTotal(sum)
    },[cart,cart.price])

    const decProduct=(product)=>{
        product.quantity >1 ?  product.quantity -= 1 : product.quantity = 1
        product.price = product.unitPrice*product.quantity
        setCart([...cart])
    }

    const incProduct=(product)=>{
        product.quantity += 1
        product.price = product.unitPrice*product.quantity
        setCart([...cart])
    }

    const removeItem=(item)=>{
        setCart(cart.filter(q=>q.id != item.id))
    }

  return (
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            
            
                {cart.map((cart,key)=>(
                 <tr key={key}>
                    <td>{cart.id}</td>
                    <td>{cart.name}</td>
                    <td>{cart.unitPrice}</td>
                    <td><button onClick={()=>decProduct(cart)}>-</button> {cart.quantity} <button onClick={()=>incProduct(cart)}>+</button></td>
                    <td>{cart.price.toFixed(2)}</td>
                    <td><button onClick={()=>removeItem(cart)}>Remove</button></td>
                 </tr>
                ))}

            <tr><th>TOTAL: </th><th>{total} </th></tr>
   
        </table>
    </div>
  )
}

export default CartList