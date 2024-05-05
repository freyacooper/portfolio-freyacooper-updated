import jcsbanner from '../../Photos/JCSbanner.png'
import jcsscreens from '../../Photos/screens/jcsDeskAndMob.png';
import jcsscreenFooter from '../../Photos/elements/jcsscreen-footer.png'
import jcsscreenProducts from '../../Photos/elements/jcsscreen-products.png'
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

function ProjJCS() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [toggle, setToggle] = useState(false)
    console.log(toggle)
    return (
        <div>
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
        </div>
    )
}
export default ProjJCS