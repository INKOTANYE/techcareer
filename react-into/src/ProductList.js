import {useContext, useState, useEffect} from 'react'
import CartContext from "./context/CartContext"
import { baseService } from './network/services/baseService'

function ProductList() {
    const [products, setProducts]=useState([])
    const {cart, setCart}=useContext(CartContext)

    const getProducts = async () => {
       try{ 
            const data= await baseService.get("/products")
            setProducts(data)
       }
       catch{
            console.log("error get products");
       }
    }

    useEffect(()=>{getProducts()},[])

    const addToCart = (product) => {
        let cartProduct = cart.find(q=>q.id===product.id)

        if(cartProduct){
            cartProduct.quantity += 1
            cartProduct.price += product.unitPrice
            setCart([...cart])
        }
        else{
            const cartProduct = {
                id: product.id,
                name: product.name,
                unitPrice : product.unitPrice,
                price: product.unitPrice,
                quantity: 1
            }
            setCart([...cart,cartProduct])
        }
    }

    
  return (
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Add Cart</th>
            </tr>

            {products.map((product, key)=> (
                <tr key={key}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.unitPrice}</td>
                    <td><button onClick={()=>addToCart(product)}> Add To Cart</button></td>
                </tr>
            ))}

        </table>
    </div>
  )
}

export default ProductList