import bivobanner from '../../Photos/bivobanner.png'
import homepage from '../../Photos/screens/BivoDeskandMob.png';
import './index.scss'
import { useEffect } from 'react';
import Moodboard from '../../Photos/elements/BivoMoodboard2.png'

function ProjBivo() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <img src={bivobanner} alt="" className='project-banner'/>
            <div className='page'>
                <h1>Bivo</h1>
                <div className='tag-container'>
                    <div className='tag ux'>
                        UX Design
                    </div>
                    <div className='tag ui'>
                        UI Design
                    </div>
                    <div className='tag wireframes'>
                        Wireframes
                    </div>
                </div>
                <div className='section'>
                    <div className='image'>
                        <img src={homepage} alt=''/>
                    </div>
                    <div className='text'>
                        <p>Jennings Chimney Sweeping is a dedicated one-man operation, specializing in chimney sweeping services while also prioritizing education and safety through their informative website and blog space.</p>
                        <p>My role in this project was to redesign the entire website, giving it a modern and inviting aesthetic while ensuring user-friendliness and accessibility to the wealth of information available. Additionally, I created a separate page specifically dedicated to the extensive articles and educational content, aptly named the "blog space." Alongside the redesign, I implemented adjustments to optimize the site for mobile devices, enhancing its reach and usability across various platforms.</p>
                    </div>
                </div>
                <div>
                    <h2>Brand Identity</h2>
                    <img className='moodboard' src={Moodboard} alt='Moodboard for Bivos brand identity, logos, brand colour scheme, images to show the feeling of the brand.'/>
                </div>
            </div>
        </div>
    )
}
export default ProjBivo