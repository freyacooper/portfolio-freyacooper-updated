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
                        <p>Whilst on my front-end web development course, this project served as my initiation into the world of JavaScript. JavaScript expands the possibilities of web development by enabling dynamic and interactive features beyond HTML and CSS, including form validation, user input handling, and real-time updates, resulting in more engaging and responsive web experiences.</p>
                        <p>The project centered around the creation of a portfolio website for an interior decorator, offering a platform to showcase her work in a modifiable gallery while retaining full control over its content without the risk of unauthorized modifications.</p>
                    </div>
                </div>
                <div>
                    <h2>The gallery</h2>
                    <p>The first step was to build the gallery to showcase her work. We then used Javascript to be able to quickly filter the photos, making an interactive experience for users viewing her work.</p>
                    <div className='gallery'>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjSB