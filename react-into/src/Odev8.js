import React, { useEffect, useState } from 'react'

function Odev8() {
    const [customerList, setCustomerList]=useState()
    const [customer, setCustomer]=useState({})
    const [refresh, setRefresh]=useState(false)

    const getData=()=>{
        fetch("https://northwind.vercel.app/api/customers")
        .then(response=>response.json())
        .then(data=> {
            setCustomerList(data)
        })
    }

    const deleteData=(id)=>{
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        fetch(`https://northwind.vercel.app/api/customers/${id}`,config)
        .then(data=> setRefresh(prev=>!prev))
    }

    const addData=()=>{
        const data = { 
            contactName:customer.contactName, 
            companyName:customer.companyName,
            address:{city:customer.city, country:customer.country}
         }
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        
        fetch(`https://northwind.vercel.app/api/customers`,config)
        .then(data=> setRefresh(prev=>!prev))
    }

    useEffect(()=>{
        getData()
    },[refresh])

  return (
    <div>
        <div>
            <label>Company Name: </label>
            <input onChange={(e)=>setCustomer(prev=>{return{...prev,companyName:e.target.value}})}/>
        </div>
        <div>
            <label>Contact Name: </label>
            <input onChange={(e)=>setCustomer(prev=>{return{...prev,contactName:e.target.value}})}/>
        </div>
        <div>
            <label>City: </label>
            <input onChange={(e)=>setCustomer(prev=>{return{...prev,city:e.target.value}})}/>
        </div>
        <div>
            <label>Country: </label>
            <input onChange={(e)=>setCustomer(prev=>{return{...prev,country:e.target.value}})}/>
        </div>
        <div>
            <button onClick={addData}>Add Customer</button>
        </div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {
                    customerList && customerList.map((customer, key) => (
                        <tr key={key}>
                            <td>{customer.id}</td>
                            <td>{customer.companyName}</td>
                            <td>{customer.contactName}</td>
                            <td>{customer.address.city}</td>
                            <td>{customer.address.country}</td>
                            <td><button onClick={()=>deleteData(customer.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
    </div>
  )
}

export default Odev8