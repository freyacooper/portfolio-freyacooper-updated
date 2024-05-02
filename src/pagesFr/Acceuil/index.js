import '../../pages/Home/index.scss'
import ProjectCard from '../../componants/ProjectCard'
import projects from '../../projects.json'
import Scroller from '../../componants/Scroller'
import photo from '../../Photos/photobetter.png'
import designLaptop from '../../Photos/design laptop.jpeg'
import devLaptop from '../../Photos/dev laptop.jpeg'

function HomeFr() {
    
    return(
        <main>
            <div className="main-container">
                <h1>
                    <span className="first">La <span className='heavy'>liberté</span> de la créativité,</span> <br/>
                    <span className="second">rencontre la <span className='heavy'>précision</span> du code</span> 
                </h1>
                <a href="#works"> 
                    <button>Voir projets
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.95 183.82">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path class="cls-1" d="M230.58,78.96c-4.8-4.5-9.7-8.9-14.37-13.53-15.25-15.13-30.37-30.39-45.63-45.52-3.69-3.66-5.11-7.87-3.45-12.7,1.44-4.21,4.62-7.48,9.2-7.2,3.38.2,7.53,1.34,9.83,3.6,26.7,26.28,53.15,52.82,79.59,79.38,5.68,5.71,5.58,11.89-.07,17.55-26.34,26.42-52.7,52.81-79.11,79.16-5.28,5.27-12.37,5.45-16.88.69-4.65-4.9-4.25-11.53,1.05-16.82,19.8-19.76,39.61-39.5,60.62-60.45-3.2,0-5.04,0-6.87,0-69.81.01-139.62.03-209.43.01-2.31,0-4.71-.05-6.9-.66C2.96,101.02-.25,96.37.02,91.27c.28-5.34,4.14-9.79,9.52-10.69,1.95-.33,3.98-.23,5.98-.23,69.48,0,138.95.03,208.43.04,1.92,0,3.85,0,5.77,0,.29-.48.58-.95.87-1.43Z"/>
                            </g>
                        </svg>
                    </button>
                </a>
                
            </div>
            <div className="glass-overlay" id='works'>
                <div className='works-title'>
                    <h2>Voici une sélection de mes projets</h2>
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
                <h2>L'Harmonie entre design et développement</h2>
                <div className="skills-container">
                        <div className="section">
                            <div className='img'>
                                <img alt="" src={designLaptop}/>  
                            </div>
                            <div className='card-text'>
                                <div className='title'>
                                    <h3>Design</h3> 
                                    <div className='line'></div>
                                </div>
                                <div>
                                    <p>Je suis passionnée par la psychologie du design, explorant comment les polices de caractères, les couleurs et d'autres détails subtils peuvent influencer les réactions humaines. Laissez-moi fusionner ma créativité innée avec les outils passionnants du monde numérique pour donner vie à vos idées.</p>
                                </div>
                            </div>
                        </div>
                        <div className="section dev">
                            <div className='img'>
                                <img alt="" src={devLaptop}/> 
                            </div>
                            <div className='card-text'>
                                <div className='title dev'>
                                    <h3>Développement</h3>
                                    <div className='line'></div>
                                </div>
                                <div>
                                    <p>Le développement web ne se limite pas à coder pour obtenir le résultat souhaité. La capacité à équilibrer délicatement les petites touches incorporées pour stimuler le subconscient tout en faisant preuve de retenue lorsque c'est nécessaire est un art subtil qui sépare le grand de l'exceptionnel.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Scroller />
        </main>
    )
}

export default HomeFr