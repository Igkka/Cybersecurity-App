
import "@/components/style/Contact.css"
import Image from "next/image"

export default function Contact(){

    return(

        <section name="contact" className="contact" id="contact">


        <div className="contactcontent">

        <h2>We are always in touch!</h2>
        <p>Our team is happy to answer your questions.</p>

        <div className="contactbtn">

            <div className="telegrams">
                <a href="https://t.me/Gukkozz" id="telegrambtn" className="telegrambtn1">Telegram</a>
                <a href="https://t.me/Cmirte" id="telegrambtn" className="telegrambtn2">Telegram</a>
            </div>

            <div className="githubs"> 
            <a href="https://github.com/Igkka" id="githubbtn" className="githubbtn1">GitHub</a>
            <a href="https://github.com/Mike635306" id="githubbtn" className="githubbtn2">GitHub</a>
            </div>

        </div>

        </div>


        
        <img className="contactimg" src="/contactus.png" alt="" draggable={false} />

        </section>

    )


}