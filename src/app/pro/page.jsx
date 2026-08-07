import "@/components/style/ProPage.css"
import Navbar from "@/components/navbar"
import PassStorage from "@/components/PasswordStorage"
import GeneratePass from "@/components/GeneratePass"

export default function ProPage(){
 return(
    <>
    <Navbar/>
    <PassStorage/>
    <GeneratePass/>

    </>
 )
}