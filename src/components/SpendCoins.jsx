"use client"

export const getCoins = () => {
    return Number(localStorage.getItem("balance"))
}

export const spendCoin = () =>{
    const balance = getCoins()

    if (balance <= 0) {
        return false
    }

    const newBalance = balance - 1

    localStorage.setItem("balance", newBalance || 0) 

    return true

}