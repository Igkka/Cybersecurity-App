"use client"

import { useState } from "react";
import "./style/CheckPass.css"
import { spendCoin } from "./SpendCoins";

export default function CheckPass(){

    const [checkPassword,setCheckPassword] = useState("")
    const [checkResult,setCheckResult] = useState("")

    const handleCheck = ()=>{

        let countCheck = 0

        const hasUppercase = /[A-Z]/.test(checkPassword);
        const hasLowercase = /[a-z]/.test(checkPassword);
        const hasNumber = /[0-9]/.test(checkPassword);
        const hasSpecial = /[!@#$%^&*]/.test(checkPassword);
        const passLength = checkPassword.length

        if (!spendCoin()) {
            alert("You don't have enough coins!");
            return;
        }

        if(hasUppercase == true){
            countCheck++
        }
        if(hasLowercase == true){
            countCheck++
        }
        if(hasNumber == true){
            countCheck++
        }
        if(hasSpecial == true){
            countCheck++
        }
        if(passLength > 8)(
            countCheck++
        )

        if(checkPassword == ""){
            alert("Enter the password")
        }

        if(countCheck == 5){
            setCheckResult("A strong password")
        }
        if(countCheck == 4){
            setCheckResult("A good password")
        }
        if(countCheck == 3){
            setCheckResult("Not a very good password.")
        }
        if(countCheck == 2){
            setCheckResult("bad password")
        }
        if(countCheck == 1){
            setCheckResult("A very bad password")
        }

    }


    return(

        <section className="checkpass">

            <h2>Checking Password</h2>

            <div className="checkpasscontent">
                <p className="checkresult">{checkResult}</p>
                <input type="" name="password" className="checkedpass"  onChange={(e)=>setCheckPassword(e.target.value)} />
                <button className="checkpassbtn" onClick={handleCheck}>Check Password</button>
            </div>

        </section>

    )
}