import './index.scss'
import ProjectCard from '../../componants/ProjectCard'
import projects from '../../projects.json'
import designIcon from '../../Photos/web-design.png'
import devIcon from '../../Photos/coding.png'
import Scroller from '../../componants/Scroller'
import photo from '../../Photos/photobetter.png'

function Home() {
    
    return(
        <main>
            <div className="main-container">
                <h1>
                    <span className="first">The  <span className='heavy'>freedom</span> of creativity,</span> <br/>
                    <span className="second">meets the <span className='heavy'>precision</span> of code</span> 
                </h1>
                <a href="#works"> 
                    <button>See projects</button>
                </a>
                
            </div>
            <div className="glass-overlay" id='works'>
                <div className='works-title'>
                    <h2>Here's a selection of my previous work</h2>
                </div>
                <div className="card-wrapper">
                    {projects.map(({ title, id, tagline, cover, color, site, github, icons, url}) => (
                            <ProjectCard key={id} title={title} tagline={tagline} cover={cover} color={color} site={site} github={github} icons={icons} url={url}/>
                    ))} 
                    
                </div>
            </div>
            <div className="about-container" id='about'>
                <div className="img-box">
                    <img alt='Freya sur un fond violet' src={photo}/>
                </div>
                <div>
                    <h2>À propos de moi</h2>
                    <p>En tant que développeur Front-End récemment qualifié, vous pouvez imaginer à quel point je suis enthousiaste à l'idée de participer à des projets passionnants à venir.</p>
                    <p>Mon enthousiasme n'est que le début de ce que je peux apporter à vos idées. Je maîtrise les principaux langages Front-End et j'ai déjà de l'expérience dans le travail au sein d'équipes de Start-Up, mettant à profit mes compétences affinées en design graphique. Je maîtrise non seulement les langages de développement, mais aussi l'anglais et le français.</p>
                    <p>On m'a dit que j'ai une attitude positive contagieuse et que j'ai la capacité de m'adapter et d'apprendre très rapidement.</p>
                </div>
            </div>
            
            <div className="skills" id='skills'>
                <h2>Harmonie entre <br/> Design et Développement</h2>
                <div className="skills-container">
                        <div className="skills-card">
                            <div className='card-title'>
                                <h3>Design</h3>
                                <img alt="" src={designIcon}/>  
                            </div>
                            <p>Je suis passionnée par la psychologie du design, explorant comment les polices de caractères, les couleurs et d'autres détails subtils peuvent influencer les réactions humaines. Laissez-moi fusionner ma créativité innée avec les outils passionnants du monde numérique pour donner vie à vos idées.</p>
                            <ul>
                                <li>Logos</li>
                                <li>UI/UX</li>
                                <li>Web design</li>
                                <li>Graphic design</li>
                            </ul>
                        </div>
                        <div className="skills-card">
                            <div className='card-title'>
                                <h3>Développement</h3>
                                <img alt="" src={devIcon}/> 
                            </div>
                            <p>Le développement web ne se limite pas à coder pour obtenir le résultat souhaité. La capacité à équilibrer délicatement les petites touches incorporées pour stimuler le subconscient tout en faisant preuve de retenue lorsque c'est nécessaire est un art subtil qui sépare le grand de l'exceptionnel.</p>
                            <ul>
                                <li>Site web</li>
                                <li>Animations</li>
                                <li>Web app</li>
                                <li>Application</li>
                            </ul>
                        </div>
                        
                </div>
            </div>
            <Scroller />

        </main>
    )
}

export default Home