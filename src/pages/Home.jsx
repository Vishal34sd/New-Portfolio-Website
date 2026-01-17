import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import GithubActivity from "../components/GithubActivity"
import Hobbies from "../components/Hobbies"


const Home = ()=>{
    return(
        <div>
            <Hero/>
            
            <Skills/>
            <Projects/>
            <GithubActivity/>
            <Hobbies/>
            <Contact/>
        </div>
    )
}


export default Home ;