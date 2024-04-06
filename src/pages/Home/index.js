import './index.scss'
import ProjectCard from '../../componants/ProjectCard'
import projects from '../../projects.json'
import designIcon from '../../Photos/web-design.png'
import devIcon from '../../Photos/coding.png'
import Scroller from '../../componants/Scroller'


function Home() {
    
    return(
        <main>
            <div className="main-container">
                <h1 className="first">The  <span>freedom</span> of creativity</h1> 
                <h1 className="second">meets the <span>precision</span> of code</h1>
                <a href="#works"> 
                    <button>See projects</button>
                </a>
                
            </div>
            <div className="glass-overlay" id='works'>
                <div className='works-title'>
                    <h2>Here's a selection of my previous work</h2>
                </div>
                <div className="card-wrapper">
                    {projects.map(({ title, id, tagline, cover, color, site, github, icons}) => (
                        <ProjectCard title={title} key={id} tagline={tagline} cover={cover} color={color} site={site} github={github} icons={icons}/>
                    ))} 
                    
                </div>
            </div>
            <div className="about-container" id='about'>
                <div className="img-box">
                    
                </div>
                <div>
                    <h2>À propos de moi</h2>
                    <p>En tant que développeur Front-End récemment qualifié, vous pouvez imaginer à quel point je suis enthousiaste à l'idée de participer à des projets passionnants à venir.</p>
                    <p>Mon enthousiasme n'est que le début de ce que je peux apporter à vos idées. Je maîtrise les principaux langages Front-End et j'ai déjà de l'expérience dans le travail au sein d'équipes de Start-Up, mettant à profit mes compétences affinées en design graphique. Je maîtrise non seulement les langages de développement, mais aussi l'anglais et le français.</p>
                    <p>On m'a dit que j'ai une attitude positive contagieuse et que j'ai la capacité de m'adapter et d'apprendre très rapidement.</p>
                </div>
            </div>
            
            <div className="skills" id='skills'>
                <h2>My skillset</h2>
                <div className="skills-container">
                        <div className="skills-card">
                            <h4>Design</h4>
                            <img alt="" src={designIcon}/>
                            <p>Quickly talk about design and passion and things.</p>
                            <ul>
                                <li>Logos</li>
                                <li>UI</li>
                                <li>UX</li>
                                <li>Web design</li>
                                <li>Graphic design</li>
                            </ul>
                        </div>
                        <div className="skills-card">
                            <h4>Dev</h4>
                            <img alt="" src={devIcon}/>
                            <p>Sentence about development and bringing my designs to life.</p>
                            <ul>
                                <li>HTML</li>
                                <li>SASS</li>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>GSAP</li>
                            </ul>
                        </div>
                        
                </div>
            </div>
            <Scroller />

        </main>
    )
}

export default Home