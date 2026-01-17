import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import GithubActivity from "../components/GithubActivity"
import Hobbies from "../components/Hobbies"
import GeetaQuote from "../components/GeetaQuote"


const Home = ()=>{
    return(
        <div className="overflow-x-hidden">
            <Hero/>
            
            <Skills/>
            <Projects/>
            <GithubActivity/>
            <Hobbies/>
            <Contact/>
            <GeetaQuote/>
        </div>
    )
}


export default Home ;