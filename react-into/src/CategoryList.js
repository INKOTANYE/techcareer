import React, { useEffect, useState } from 'react'

function CategoryList() {
    const [catList, setCatList]=useState([])

    useEffect(()=>{
      fetch("https://northwind.vercel.app/api/categories")
      .then(response => response.json())
      .then(data => setCatList(data))
    },[])

  return (
    <div>
       <ul> {catList.map((cat,key)=>
         <li key={key}>{cat.name}</li>)} </ul>
    </div>
  )
}

export default CategoryList