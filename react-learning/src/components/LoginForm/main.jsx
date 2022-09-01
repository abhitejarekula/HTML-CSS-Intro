import { useState } from 'react'
import "./mainstyle.css"
const initialForm = {
  username: "",
  password: ""
}

function Form () {
  const [form, setForm] = useState(initialForm)
  const [name, setName] = useState("")

  const handleInput = (event) => {
    setName (event.target.value)
  }

    return (
   <div className='app'>
    <form>
        <div className='login-form'>
          <h1> Register</h1>
          <h2> Please enter your credentials to login</h2>
            <div className='input-container'>
             <label>
                Username
                <input/>
             </label>
            </div>
        
            <div className='input-container'>
             <label>
                Password
                <input />
             </label>
            </div>
            <div className='button-container'>
             <button></button>
            </div>
        </div>
    </form>
   </div>
  
  )
  
}

export default Form