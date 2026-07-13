import React, { useState } from 'react'

const App = () => {
  
 const [count, setCount] = useState(0)
 const [user, setUser] = useState({
  name:"Raman"
 })
  

  return (
    <div>
      <h1>Hello</h1>
      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Change inc</button>
      <button onClick={()=>{ // Rerender krega because har bar ek naya object bnega with different refrence
        // setUser({name:"Banman"})
        user.name = 'Batman'
      }}>Change name</button>
    </div>
  )
}

export default App
