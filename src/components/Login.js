import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';
import loginPage from "./../img/loginPage.jpeg";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("http://localhost:8000/", {
                email, password

            })
            .then(res=>{
                if(res.data==="Email exists"){
                    navigate("/home",{state: {id:email}})
                }
                else if(res.data==="Does not exist"){
                    alert("User does not exist")
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e)
            })
        }
            catch(e){
                console.log(e)
            }
        }
    


    return(
        <div style={{ backgroundImage:`url(${loginPage})` }} className="login">

            <h1 class="text-2xl font-bold pt-20 pb-5">Login</h1>

            <form action="POST">
                <div class=" pt-2">
                <input type="email" placeholder="Email" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e)=>{setEmail(e.target.value)}}/>                                                                                                     
                </div>
                <div class=" pt-5">
                <input type="password"  placeholder="Password" class=" border border-gray-00 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-white-100 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e)=>{setPassword(e.target.value)}}/>    
                </div>
                <div class="pt-5">
                <button onClick={submit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>

            <br/>
            <h6 class="text-sm">Do not have an account? | <Link class="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="/register">Register</Link></h6>
   

        </div>
    )

}

export default Login;