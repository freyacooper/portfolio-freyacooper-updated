import sbbanner from '../../Photos/sbbanner.png'
import homepage from '../../Photos/screens/SBDeskandMob.png';
import './index.scss'
import { useEffect } from 'react';

function ProjSB() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <img src={sbbanner} alt="" className='project-banner'/>
            <div className='page'>
                <h1>Portfolio Sophie Bluel</h1>
                <div className='tag-container'>
                    <div className='tag webdev'>
                        Web development
                    </div>
                    <div className='tag js'>
                        Javascript
                    </div>
                    <div className='tag css'>
                        CSS
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
                </div>
            </div>
        </div>
    )
}
export default ProjSB