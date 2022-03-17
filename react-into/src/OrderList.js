import React, { useEffect, useState } from 'react'

function OrderList() {
    const [orderList,setOrdertlist]=useState([])
    const [staticData, setStaticData]=useState([])
    const [count,setCount]=useState()

    useEffect(()=>{
        getData()
    },[])

    const getData=()=> {
        fetch("https://northwind.vercel.app/api/orders")
        .then(response=>response.json())
        .then(data=> {setOrdertlist(data); setStaticData(data)})
    }

    const getOrders=()=>{
        setOrdertlist(staticData.slice(0,count))
    }

  return (
    <div>
        <label>How many order? </label>
        <input onChange={(e)=>setCount(e.target.value)}/>

        <button onClick={getOrders}>GET ORDERS</button>

            <table>
                <tr>
                    <th>customer ID</th>
                    <th>ship name</th>
                    <th>city</th>
                </tr>
                {
                    orderList && orderList.map((order, key) => (
                        <tr key={key}>
                            <td>{order.customerId}</td>
                            <td>{order.shipName}</td>
                            <td>{order.shipAddress?.city}</td>
                        </tr>
                    ))
                }
            </table>
    </div>
  )
}

export default OrderList