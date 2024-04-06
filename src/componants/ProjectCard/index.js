import './index.scss'

function ProjectCard({ title, tagline, cover, color }) {
    return(
        <div className="card" style={{backgroundColor: color}}>
            <img alt="A screenshot of the website" src={cover}/>
            <div className="project-details">
               <h3>{title}</h3>
               <p>{tagline}</p>
               { title === "Bivo" ? (
                <button className='disabled' disabled>Coming soon !</button>
               ) : (
                <div className='button-container'>
                    <button>See code</button>
                    <button>Go to website</button>
                </div>
                
               )}
            </div>
        </div>
    )
}
export default ProjectCard