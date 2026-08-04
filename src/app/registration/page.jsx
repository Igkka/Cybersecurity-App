"use client"

import "@/components/style/Registration.css"
import { useState } from "react"
import Link from "next/link"

export default function Registration(){


    const [blank,setBlank] = useState({
        username:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(blank.username.trim() === "" || blank.password.trim() === ""){
            alert("Fill in all fields")
            return
        }

        const user = blank

        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("currentUser", user.username);
        alert("You are registered")
        window.location.href = ("/")
    }

    const handleChange = (e) => {
        setBlank({ ...blank,
        [e.target.name.trim()]:e.target.value.trim(),}); 
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="blanks">
            <input name="username" onChange={handleChange} placeholder="Your username" />
            <input name="password" type="password" onChange={handleChange} placeholder="Your password" />
            </div>
            <button className="registerbnt">Register</button>
            <p>Have account?<Link href={"/login"}>  Sign In</Link></p>

        </form>
    )

}