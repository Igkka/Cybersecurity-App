import "@/components/style/Famil.css"


export default function FamilPage() {

    return(

        <section className="famil">



            <div className="familcontent">
                <h2>Take control of your digital security</h2>
                <p>Join the ranks of users who trust PulseGuard to protect their data.</p>
                <span>
                    <button className="startreg">Get Started</button>
                    <button className="startdoc">Learn More</button>
                </span>
            </div>

            <img className="sphereimg" src="/sphereimg.png" alt="" draggable={false}/>


        </section>

    )

}