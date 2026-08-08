"use client"
import "@/components/style/Balance.css"
import { useEffect, useState } from "react"
import { spendCoin } from "./SpendCoins"

export default function UserBalance(){

    const [balanceUser,setBalanceUser] = useState("")

    useEffect(()=>{

        const balance = localStorage.getItem("balance");

        if (balance === null) {
            const plan = localStorage.getItem("plan");

            if (plan === "pro") {
                localStorage.setItem("balance", "100");
            } else {
                localStorage.setItem("balance", "10");
            }
        }

        localStorage.setItem("balance",balance)
        setBalanceUser(balance)


    },[])




return(
    <div className="balancecontent">
        <p>Balance: {balanceUser}</p>
    </div>
)

}