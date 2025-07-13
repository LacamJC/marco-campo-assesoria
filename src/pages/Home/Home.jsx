import About from "../About/About"
import AreasAtuacao from "../AreasAtuacao/AreasAtuacao"
import Contato from "../Contato/Contato"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"

function Home() {
    const height = '200px'
    return (
        <>
            <Hero />
            <About />
            <AreasAtuacao />
            <Contato />
            <Footer />
        </>
    )
}

export default Home