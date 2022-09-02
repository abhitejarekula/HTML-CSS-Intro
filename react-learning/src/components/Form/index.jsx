import { useState } from 'react'
import "./style.css"
const initialForm = {
    name: "",
    email: "",
    password: ""
}

function Form ({title}) {
    const [form, setForm] = useState(initialForm)

    const handleInput = (event) => {
        setForm((prevForm) => ({...prevForm, [event.target.name]: event.target.value}))
    }

    const inputFields = [
        {
           id: 1,
           name: "name",
           value: form.name,
           onChange: handleInput,
           type: "text"
        },
        {
           id: 2,
           name: "email",
           value: form.email,
           onChange: handleInput,
           type: "email"
        },
        {
           id: 3,
           name: "password",
           value: form.password,
           onChange: handleInput,
           type: "password"
        }
    ]

    function capFirstLetter (str) {
        let s = str.split("") // ["e", "m", "a", "i", "l"]
        s[0] = s[0].toUpperCase()
        return s.join("")
    }

    console.log(form)

    return (
        <>
            <form className="flex flex-col border border-black mt-4 w-full md:w-6/12 lg:w-3/12 mx-auto p-4 space-y-4">
                <h1 className="text-3xl"><strong>{title}</strong></h1>

                <div className="space-y-4">
                    {inputFields.map(({id, name, type, onChange, value}) => (
                        <label className="flex flex-col text-start" key={id}>
                            {capFirstLetter(name)} 
                            <input className="border border-black p-2 rounded-md" type={type} name={name} onChange={onChange} value={value} />
                        </label>
                    ))}
                </div>
                <button className="bg-blue-500 p-2 text-white rounded-md">{title === "Register" ? "Submit" : "Sign In"}</button>
                
            </form>
        </>
    )
}

export default Form