import kasabanner from '../../Photos/kasabanner.png'
import homepage from '../../Photos/screens/KasaDeskandMob.png';
import './index.scss'
import { useEffect, useState } from 'react';
import folders from '../../Photos/elements/kasaFolders.png'
import router from '../../Photos/elements/kasaRouter.png'
import comp from '../../Photos/elements/kasaComp2.png'
import logement1 from '../../Photos/elements/logement1.png'
import logement2 from '../../Photos/elements/logement2.png'
import Back from '../../componants/Back';
import Loader from '../../componants/Loader';

function ProjKasa() {
    const[showButton, setShowButton] = useState(false)
    useEffect(() => {
        window.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant"
       });

       const handleScrollButtonVisability = () => {
        window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
       };

       window.addEventListener('scroll', handleScrollButtonVisability);

       return () => {
        window.removeEventListener('scroll', handleScrollButtonVisability)
       };
   }, [])


    return (
        <div>
            <Loader />
            <Back />
            {showButton && (
            <a href='#back' className='link-container'>
                {/* <p>Back to top</p> */}
                <div className='to-top'>
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.95 183.82">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path className="cls-1" d="M230.58,78.96c-4.8-4.5-9.7-8.9-14.37-13.53-15.25-15.13-30.37-30.39-45.63-45.52-3.69-3.66-5.11-7.87-3.45-12.7,1.44-4.21,4.62-7.48,9.2-7.2,3.38.2,7.53,1.34,9.83,3.6,26.7,26.28,53.15,52.82,79.59,79.38,5.68,5.71,5.58,11.89-.07,17.55-26.34,26.42-52.7,52.81-79.11,79.16-5.28,5.27-12.37,5.45-16.88.69-4.65-4.9-4.25-11.53,1.05-16.82,19.8-19.76,39.61-39.5,60.62-60.45-3.2,0-5.04,0-6.87,0-69.81.01-139.62.03-209.43.01-2.31,0-4.71-.05-6.9-.66C2.96,101.02-.25,96.37.02,91.27c.28-5.34,4.14-9.79,9.52-10.69,1.95-.33,3.98-.23,5.98-.23,69.48,0,138.95.03,208.43.04,1.92,0,3.85,0,5.77,0,.29-.48.58-.95.87-1.43Z"/>
                        </g>
                    </svg>
                </div>
            </a>
            )}
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
                        <p>As part of my front-end development course, I worked on a project to create a website for Kasa, an imaginary company specializing in rental properties between individuals. This project introduced us to React, a powerful JavaScript library for building user interfaces. </p>
                        <p>The entire website was developed using React, and as each property listing required its own page, we utilized React Router to transform the single-page application into a multi-page site. The focus of this project was to learn the new component-based logic and structure of React while staying true to the provided wireframes. Additionally, we continued to implement previously learned web development techniques such as responsive web design and animations, ensuring a seamless and engaging user experience.</p>
                    </div>
                </div>
                <div>
                    <h2>Workflow with React</h2>
                    <p>Transitioning to React from traditional HTML, CSS, and JavaScript brought several key differences to my workflow. With the component-based architecture of React, I learned to build reusable and self-contained UI elements. This modular design approach that React brings, lends perfectly to an organized file structure where each page or component had its own folder containing the component file and its corresponding SCSS styles.</p>
                    <div className='photos-div workflow'>
                        <img src={folders} alt='Folder architecture of this React project.'/>
                        <img src={comp} alt='Code for one of the React component files in this project.'/>
                    </div>
                </div>
                <div className='router-section'>
                    <h2>React Router</h2>
                    <p>React Router is a powerful library for React that enables navigation and routing in web applications. It allows us to turn a single-page application (SPA) into a multi-page experience, making it easy to manage different views and URLs within the app. With React Router, users can navigate through various pages without refreshing the entire page, creating a smooth and dynamic user experience.</p>
                    <div className='div'>
                        <p>In this project, I used React Router to transform the Kasa website from a single-page application into a multi-page site. This allowed each property listing to have its own dedicated page, enhancing the user experience and making navigation intuitive. </p>
                        <img src={router} alt='Code showing the React Router used for this project.'/>
                    </div>
                </div>
                
                <div className='photos-div'>
                    <div className='url-container'>
                        <div className='url-bar'>
                            <p>https://kasa-omega-one.vercel.app/logement/<span>c67ab8a7</span></p>
                        </div>
                        <img src={logement1} alt=''/>
                    </div>
                    
                    <div className='url-container'>
                        <div className='url-bar'>
                            <p>https://kasa-omega-one.vercel.app/logement/<span>d60ca600</span></p>
                        </div>
                        <img src={logement2} alt=''/>
                    </div>
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