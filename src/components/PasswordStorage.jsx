"use client"

import "@/components/style/PasswordStorage.css"
import { useState } from "react"
import { useEffect } from "react"

export default function PassStorage(){

    const [passwords,setPasswords] = useState([])
    const [dataStorage,setDataStorage] = useState({
        id:"",
        title:"",
        password:"",
    })

    useEffect(() => {
        
    const saved = JSON.parse(localStorage.getItem("passwords"));

    if (saved) {
        setPasswords(saved);
    }

    }, []);

    const CreateStorage = (e) => {
        e.preventDefault()

            const newStorage = {
                id: Date.now(),
                title: dataStorage.title,
                password: dataStorage.password,
           };

        if (
            dataStorage.title.trim() === "" ||
            dataStorage.password.trim() === "" 
        ) {
            alert("Fill in all fields");
            return;
        }

        if (passwords.length >= 6) {
            alert("Maximum 6 storages.");
            return;
        }
                const updatedPasswords = [...passwords, newStorage];
        localStorage.setItem("passwords",JSON.stringify(updatedPasswords));
        setPasswords(updatedPasswords);
        window.location.href = "/pro"

        
    }
    
    const handleChangeStorage = (e) => {
        setDataStorage({
            ...dataStorage,
            [e.target.name]: e.target.value
            
        })
    }

    const handleDelete = (id) => {

        const updatedPasswords = passwords.filter((item) => {
            return item.id !== id
        });

        setPasswords(updatedPasswords);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords));

    }




    return(
    <section className="passStoragePage">
        <form action="" onSubmit={CreateStorage}>

        <h2>Password Storage</h2>

        <div className="passStorageContent">

            <input name="title" type="text" placeholder="Site Name" value={dataStorage.title} onChange={handleChangeStorage}/>
            <input name="password" type="password" placeholder="Site Password" value={dataStorage.password} onChange={handleChangeStorage}/>

            <button type="submit">
                Create New Storage
            </button>

        </div>

        <div className="storages">
            {passwords.map((item) => (
                <div className="passItem" key={item.id}>

                    <h3>{item.title}</h3>
                    <p>{item.password}</p>
                    <button className="Delete" onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    </form>
    </section>
    )

}
