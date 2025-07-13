import About from "../About/About"
import AreasAtuacao from "../AreasAtuacao/AreasAtuacao"
import Contato from "../Contato/Contato"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"

function Home() {
    const height = '100px'
    return (
        <>
            <Hero />
            <div style={{ height: height }}></div>
            <About />
            <div style={{ height: height }}></div>
            <AreasAtuacao />
            <div style={{ height: height }}></div>
            <Contato/>
            <div style={{ height: height }}></div>
            <Footer/>

        </>
    )
}

export default Home