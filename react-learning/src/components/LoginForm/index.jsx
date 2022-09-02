import { useState } from 'react'
const initialForm = {
  username: "",
  password: ""
}

function LoginForm () {
  const [form, setForm] = useState(initialForm)
  const [name, setName] = useState("")

  const handleInput = (event) => {
    setName (event.target.value)
  }

    return (
          <div className = "app">
         <div className="flex items-center min-h-screen bg-white dark:bg-green-900">
             <div className="container mx-auto bg-white">
                <div className="max-w-md mx-auto my-10">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">LOGIN</h1>
                        <p className="text-gray-500 dark:text-gray-400">Please enter your credentials to login</p>
                    </div>
                    <div className="m-7">
                        <form >
                           <div className="mb-6">
                               <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
                               <input type="email" name="email" id="email" placeholder="username" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <button type="button" class="w-full px-3 py-4 text-white bg-green-500 rounded-md focus:bg-indigo-600 focus:outline-none">LOGIN</button>
                    </div>
                    <p className="text-sm text-center text-gray-400">Not registered? <a href="#!" class="text-green-400 ">Create an account</a>.</p>
                </form>
            </div>
        </div>
    </div>
 </div>

</div> 
    )
}
   

export default LoginForm