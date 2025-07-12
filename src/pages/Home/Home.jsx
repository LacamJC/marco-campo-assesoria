import About from "../About/About"
import AreasAtuacao from "../AreasAtuacao/AreasAtuacao"
import Hero from "../Hero/Hero"

function Home() {
    return (
        <>
            <Hero />
            <div style={{height : '100px'}}></div>
            <About />
            <div style={{height : '100px'}}></div>
            <AreasAtuacao />
        </>
    )
}

export default Home