import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Documents from "./components/Documents";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="background">
                <span className="blob blob1"></span>
                <span className="blob blob2"></span>
                <span className="blob blob3"></span>
            </div>

            <Navbar />

            <main>
                <Hero />
                <Pricing />
                <Documents />
            </main>

            <Footer />
        </>
    );
}

export default App;