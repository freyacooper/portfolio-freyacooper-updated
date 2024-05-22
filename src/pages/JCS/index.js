import jcsbanner from '../../Photos/JCSbanner.png'
import jcsscreens from '../../Photos/screens/jcsDeskAndMob.png';
import jcsscreenFooter from '../../Photos/elements/jcsscreen-footer.png'
import jcsscreenProducts from '../../Photos/elements/jcsProducts.png'
import jcsPricingOld from '../../Photos/elements/jcsPricingOld.png'
import jcsPricingNew from '../../Photos/elements/jcsPricingNew.png'
import jcsblogmob from '../../Photos/elements/jcsblogmobsmall.png'
import jcsblogdesk from '../../Photos/elements/jcsblogdesksmall.png'
import tools from '../../Photos/elements/tools2.png'
import jcscontent1 from '../../Photos/elements/jcscontent1.png'
import jcscontent2 from '../../Photos/elements/jcscontent2.png'
import jcscontent3 from '../../Photos/elements/jcscontent3.png'
import './index.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import Back from '../../componants/Back';

function ProjJCS() {
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
    const [toggle, setToggle] = useState(false)
    console.log(toggle)
    return (
        <div>
            <Back />
            {showButton && (
            <a href='#back' className='link-container'>
                {/* <p>Back to top</p> */}
                <div className='to-top'>
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.95 183.82">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class="cls-1" d="M230.58,78.96c-4.8-4.5-9.7-8.9-14.37-13.53-15.25-15.13-30.37-30.39-45.63-45.52-3.69-3.66-5.11-7.87-3.45-12.7,1.44-4.21,4.62-7.48,9.2-7.2,3.38.2,7.53,1.34,9.83,3.6,26.7,26.28,53.15,52.82,79.59,79.38,5.68,5.71,5.58,11.89-.07,17.55-26.34,26.42-52.7,52.81-79.11,79.16-5.28,5.27-12.37,5.45-16.88.69-4.65-4.9-4.25-11.53,1.05-16.82,19.8-19.76,39.61-39.5,60.62-60.45-3.2,0-5.04,0-6.87,0-69.81.01-139.62.03-209.43.01-2.31,0-4.71-.05-6.9-.66C2.96,101.02-.25,96.37.02,91.27c.28-5.34,4.14-9.79,9.52-10.69,1.95-.33,3.98-.23,5.98-.23,69.48,0,138.95.03,208.43.04,1.92,0,3.85,0,5.77,0,.29-.48.58-.95.87-1.43Z"/>
                        </g>
                    </svg>
                </div>
            </a>
            )}
            <img src={jcsbanner} alt="" className='project-banner'/>
            <div className='page'>
                <h1>Jennings Chimney Sweeping</h1>
                <div className='tag-container'>
                    <div className='tag ux'>
                        UX Design
                    </div>
                    <div className='tag ui'>
                        UI Design
                    </div>
                    <div className='tag graphic'>
                        Graphic Design
                    </div>
                </div>
                <div className='section'>
                    <div className='image'>
                        <img src={jcsscreens} alt=''/>
                    </div>
                    <div className='text'>
                        <p>Jennings Chimney Sweeping is a dedicated one-man operation, specializing in chimney sweeping services while also prioritizing education and safety through their informative website and blog space.</p>
                        <p>My role in this project was to redesign the entire website, giving it a modern and inviting aesthetic while ensuring user-friendliness and accessibility to the wealth of information available. Additionally, I created a separate page specifically dedicated to the extensive articles and educational content, aptly named the "blog space." Alongside the redesign, I implemented adjustments to optimize the site for mobile devices, enhancing its reach and usability across various platforms.</p>
                    </div>
                </div>
                <div>
                    <h2>Project planning</h2>
                    <p>Before bringing Jennings Chimney Sweeping's vision to life with a fresh website design, meticulous planning was essential. Utilizing Adobe XD, I crafted wireframes to outline the structure and functionality of the new site. Each wireframe served as a blueprint, guiding the development process and ensuring that every aspect of the website aligned seamlessly with the client's goals.</p>
                    <div className='screenshot'>
                        <img src={jcsscreenFooter} alt="capture d'écran de la maquette du site 'Jennings Chimney Sweeping"/>
                    </div>
                    <div className='screenshot'>
                        <img src={jcsscreenProducts} alt="capture d'écran de la maquette du site 'Jennings Chimney Sweeping"/>
                    </div>
                </div>
                <div>
                    <h2>The transformation</h2>
                    <p>Toggle between the old and new versions, and experience firsthand the remarkable difference in clarity and accessibility, particularly showcased in the redesigned price list section. Embrace the journey as we navigate through the before and after, celebrating the transformative power of thoughtful design.</p>
                    <div className='toggle'>
                        <h3>Original</h3>
                        <input type="checkbox" id="switch" checked={toggle} onChange={() => setToggle(!toggle)}/><label for="switch">Toggle</label>
                        {toggle ? <h3>Updated ✨</h3> : <h3>Updated</h3>}
                    </div>
                    <div className='toggle-img'>
                        {!toggle ? <img src={jcsPricingOld} alt="capture d'écran de l'ancienne version du site web"/> : <img src={jcsPricingNew} alt="capture d'écran de la nouvelle version du site web"/>}
                    </div>
                </div>
                <div>
                    <h2>New additions</h2>
                    <p>While the primary goal was to revamp the design and usability of the existing platform, we also embraced the opportunity to introduce innovative features that elevate the user experience to new heights.</p>
                    <div className='blog-container'>
                        <div>
                           <img src={jcsblogdesk} alt="capture d'écran du page blog version desktop"/> 
                        </div>
                        <div>
                           <img src={jcsblogmob} alt="capture d'écran du page blog version mobile"/> 
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Tools used</h2>
                    <div className='tools-container'>
                        <div>
                            <p>In crafting the Jennings Chimney Sweeping website, I leveraged the power of Elementor, a versatile page builder plugin for WordPress. As a non-coder at the time, Elementor provided an intuitive and efficient solution for designing and constructing the site without the need for coding. By utilizing its drag-and-drop interface and comprehensive widget library, I was able to create visually stunning layouts and incorporate essential elements seamlessly.</p>
                            <p>Moreover, the decision to build the website on the WordPress platform offered the client a user-friendly interface for making ongoing updates and modifications with ease. With WordPress's intuitive content management system, the client could effortlessly add new content, update photos, and manage various aspects of the website, ensuring its relevance and freshness over time.</p>  
                        </div>
                        <div>
                            <img src={tools} alt="logos de Elementor et Wordpress"/>
                        </div> 
                    </div>
                </div>
                <div>
                    <h2>Ongoing</h2>
                    <p>In addition to the website redesign and ongoing maintenance, I also create captivating graphic content for Jennings Chimney Sweeping's social media presence. Through engaging visuals and informative posts, we continue to connect with the audience, foster community engagement, and drive business growth. </p>
                    <div className='content-container'>
                        <img src={jcscontent1} alt=""/>
                        <img src={jcscontent2} alt=""/>
                        <img src={jcscontent3} alt=""/>
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
export default ProjJCS