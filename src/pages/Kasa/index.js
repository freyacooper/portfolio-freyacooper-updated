import kasabanner from '../../Photos/kasabanner.png'
import homepage from '../../Photos/screens/KasaDeskandMob.png';
import './index.scss'
import { useEffect } from 'react';

function ProjKasa() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <img src={kasabanner} alt="" className='project-banner'/>
            <div className='page'>
                <h1>Kasa</h1>
                <div className='tag-container'>
                    <div className='tag webdev'>
                        Web development
                    </div>
                    <div className='tag react'>
                        React
                    </div>
                    <div className='tag sass'>
                        Sass
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
            <div className='footer'>
                    <svg width="165" height="277" viewBox="0 0 165 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 121.5C39 137 64.0742 126.5 81.7871 118.5C99.5 110.5 108.556 101 117.5 89.5C126.444 78 128.82 71.4049 132.5 62C136.18 52.5951 138.048 43.4278 138.597 33C138.887 27.5 138.922 13.6531 136 10C132.384 5.47951 128.646 8.82856 125 14.5C116.885 27.1239 110.465 42.123 104.723 56C101 65 98 72 94.9656 81.4568C93.011 85.5959 92.45 88.5053 90.923 94.0026C89.396 99.5 88.0653 102.5 84.5 111.5C80.9845 120.374 78.4876 124.702 76.1468 132.895C73.7409 141.315 71.7104 149.525 69.595 157.987C64.7837 177.232 63.6009 198.291 63.6009 218.137C63.6009 231.483 63.6009 249 74.5 263.5C81 270 85.5881 270.043 93.014 266.578C100.681 263 105.805 251.778 108.487 244C113.85 228.449 113.601 213.376 113.601 197C113.601 181.679 111.75 153 109.5 148.5C106.5 142.5 97.014 142.5 93.014 144.5C89.014 146.5 88.4333 154.473 90.5 157.987C92.8529 161.987 104.542 166 113.601 166C130.89 166 147.094 157.359 157 142.5" stroke="white" strokeWidth="15" strokeLinecap="round"/>
                    </svg>
                <div className='footer-nav'>
                    <a href='/#works'>Works</a>
                    <a href='/#skills'>Services</a>
                    <a href='/#about'>About Me</a>
                </div>
            </div>
        </div>
    )
}
export default ProjKasa