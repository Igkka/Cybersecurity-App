"use client"
import "@/components/style/login.css"
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("The user was not found");
        return;
    }

    if (login === user.login && password === user.password) {
        alert("Wellcome");
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("isAuth", "true");
        localStorage.setItem("currentUser", user.username);
    } else {
        alert("Incorrect username or password");
    }
  };

  return (
    <form onSubmit={signIn}>
        <div className="blanks">
            <input name="username" placeholder="Your username" value={login} onChange={(e) => setLogin(e.target.value)}/>
            <input name="password" type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
            <button className="signinbtn">Sign In</button>
            <p>No account?<Link href={"/registration"}>  Register</Link></p>
    </form>
  );
}

