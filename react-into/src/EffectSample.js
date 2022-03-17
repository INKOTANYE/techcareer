import React, { useState, useEffect } from 'react'

function EffectSample() {
    const [count, setCount]=useState(0)

    useEffect(()=>{
        console.log('Ben yazdırılacak mıyım?');
    },[count])

  return (
    <div>
        <h1>SAYAÇ: {count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Arttır</button>
    </div>
  )
}

export default EffectSample