import { useState } from 'react'
const initialForm = {
  name: "",
  email: "",
  password: ""
}

function Form () {
  const [form, setForm] = useState(initialForm)
  const [name, setName] = useState("")

  const handleInput = (event) => {
    setName(event.target.value)
  }

    return (
    <form className="flex flex-col border border-black mt-4 w-full md:w-6/12 lg:w-3/12 mx-auto p-4 space-y-4">
    <h1 className="text-3x1"><strong>Register</strong></h1>
    <div className="space-y-4">
        <label className="flex flex-col text-start">
         Name
         <input className="border border-black p-2 rounded-md" onChange={handleInput}/>
       </label>
       <label className="flex flex-col text-start">
        Email
       <input className="border border-black p-2 rounded-md"/>
      </label>
    <label className="flex flex-col text-start">
      Password
      <input className="border border-black p-2 rounded-md"/>
    </label>
    </div>
    <button className="bg-blue-500 p-2 text-white rounded-md">Submit</button>
   </form>
  
  )
  
}

export default Form