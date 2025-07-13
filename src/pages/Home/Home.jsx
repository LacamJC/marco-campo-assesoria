import About from "../About/About"
import AreasAtuacao from "../AreasAtuacao/AreasAtuacao"
import Contato from "../Contato/Contato"
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

        </>
    )
}

export default Home