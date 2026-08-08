"use client"
import "@/components/style/Balance.css"
import { useEffect, useState } from "react"

export default function UserBalance(){

    const [balance,setBalance] = useState("")

    useEffect(()=>{
        const plantype = localStorage.getItem("plan")

        if(plantype == "pro"){
            setBalance(100)
        }else{
            setBalance(10)
        }
    })




return(
    <div className="balancecontent">
        <p>Balance: {balance}</p>
    </div>
)

}