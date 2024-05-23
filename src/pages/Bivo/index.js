import bivobanner from '../../Photos/bivobanner.png'
import homepage from '../../Photos/screens/BivoDeskandMob.png';
import './index.scss'
import { useEffect } from 'react';
import Moodboard from '../../Photos/elements/BivoMoodboard2.png'
import webDesignElemets from '../../Photos/elements/webDesignElements.png'
import phone1 from '../../Photos/elements/phones-06.png'
import phone2 from '../../Photos/elements/phones-07.png'
import phone3 from '../../Photos/elements/phones-08.png'
import phone4 from '../../Photos/elements/phones.png'
import xdMobile from '../../Photos/elements/xdMobile.png'
import xdPrototype from '../../Photos/elements/xdPrototype.png'
import bivohomepage from '../../Photos/elements/bivohome.png'
import bivolisting from '../../Photos/elements/bivolisting.png'
import bivosearch from '../../Photos/elements/bivosearch.png'
import bivofilter from '../../Photos/elements/bivofilter.png'
import Back from '../../componants/Back';
import { useState } from 'react';

function ProjBivo() {
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
            <Back />
            {showButton && (
            <a href='#back' className='link-container'>
                <div className='to-top'>
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.95 183.82">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path className="cls-1" d="M230.58,78.96c-4.8-4.5-9.7-8.9-14.37-13.53-15.25-15.13-30.37-30.39-45.63-45.52-3.69-3.66-5.11-7.87-3.45-12.7,1.44-4.21,4.62-7.48,9.2-7.2,3.38.2,7.53,1.34,9.83,3.6,26.7,26.28,53.15,52.82,79.59,79.38,5.68,5.71,5.58,11.89-.07,17.55-26.34,26.42-52.7,52.81-79.11,79.16-5.28,5.27-12.37,5.45-16.88.69-4.65-4.9-4.25-11.53,1.05-16.82,19.8-19.76,39.61-39.5,60.62-60.45-3.2,0-5.04,0-6.87,0-69.81.01-139.62.03-209.43.01-2.31,0-4.71-.05-6.9-.66C2.96,101.02-.25,96.37.02,91.27c.28-5.34,4.14-9.79,9.52-10.69,1.95-.33,3.98-.23,5.98-.23,69.48,0,138.95.03,208.43.04,1.92,0,3.85,0,5.77,0,.29-.48.58-.95.87-1.43Z"/>
                        </g>
                    </svg>
                </div>
            </a>
            )}
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
                        <p>Bivo is a small start-up company specializing in short to mid-term rental properties in France, aiming to connect travelers with unique and convenient lodging options to stay in up to one year.</p>
                        <p>I began at this start-up in a graphic design role, responsible for creating the company's logo and brand identity. This involved developing a cohesive visual language that would resonate with Bivo's target audience. I then transitioned into UX/UI design for the project, where I built comprehensive wireframes for the different iterations of the website. My role ensured that the user experience was intuitive and visually appealing across all devices.</p>
                    </div>
                </div>
                <div>
                    <h2>Brand Identity</h2>
                    <p>The brand identity for Bivo is designed to evoke a sense of calm, ease, and relaxation. Moving and finding a new rental property is typically stressful, so our goal was to create an experience that alleviates the stressful aspects of finding a new temporary home. We aimed to blend the safety and comfort of the clients own home with the freshness and relaxation of a holiday. The result is a brand that feels low-effort and ‘fuss-free’, ensuring that users feel at ease throughout their rental journey.</p>
                    <img className='moodboard' src={Moodboard} alt='Moodboard for Bivos brand identity, logos, brand colour scheme, images to show the feeling of the brand.' loading='lazy'/>
                    <div className='brand-identity'>
                        <div>
                            <h3>Colours</h3>
                            <p>The choice of brand colours was essential in creating the desired calm and inviting atmosphere. The green evokes feelings of abundance, peace, refreshment, and security, which align with the brand’s goal of providing a stress-free rental experience. Green is a positive colour known to reduce stress and anxiety, making it ideal for a platform intended to make finding a rental property easy and relaxing. The purple tones are equally soothing but have the added benefit of containing some of the power of red making them the perfect accent colour and helping them to stand out against the green.</p>
                            <p>Together, these colours, along with the images used on the website, evoke the serene beauty of French lavender fields and iris flowers, which have strong cultural ties to France and further reinforce the brand's connection to its locale.</p>
                        </div>
                        <div>
                            <h3>Font</h3>
                            <p>The fonts chosen for Bivo play a crucial role in conveying the brand's identity. The elegant Canela Regular is used to evoke a sense of sophistication and tranquility, mirroring the comfort and ease Bivo aims to offer its users. Avenir, with its clean and modern lines, complements Canela perfectly, adding a contemporary touch that ensures readability and a user-friendly experience across all digital platforms.</p>
                            <p>The combination of these fonts helps to strike a balance between the traditional and the modern, reflecting the brand’s dedication to providing a stylish yet straightforward service.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Website design elements</h2>
                    <p>The design elements across the Bivo website continue to embody these themes, reinforcing a sense of tranquility and ease. Rounded corners were intentionally employed to impart a sense of safety, approachability, and friendliness, fostering a welcoming atmosphere for users embarking on their rental journey. This choice not only enhances the aesthetic appeal but also reduces cognitive load, as rounded shapes are inherently easier to process visually. Soft drop shadows were delicately applied throughout the site, contributing to a gentle and soothing ambiance, devoid of harsh contrasts. Ample whitespace was strategically incorporated to provide breathing room and enhance clarity, facilitating effortless navigation and content consumption.</p>
                    <img loading='lazy' className='moodboard' src={webDesignElemets} alt='Elements of the Bivo website, buttons, checkboxes, toggles switches for example.'/>
                </div>
                <div className='wireframes'>
                    <h2>Wireframes</h2>
                    <p>Introducing our design process, I began by crafting the mobile version of the site, prioritizing a seamless and user-friendly experience for individuals who may be accessing Bivo while on the move. Recognizing the prevalence of mobile usage, each aspect was meticulously designed to ensure ease of navigation and engagement. Subsequently, I expanded the focus to include desktop and tablet versions, ensuring that Bivo's interface remains intuitive and visually appealing across all devices.</p>
                    <img  loading='lazy' className='moodboard xd' src={xdMobile} alt='Screenshot of Xd file with mobile wireframes'/>
                    <div className='phones'>
                        <img src={phone1} alt='screen shot of the bivo mobile website'/>
                        <img src={phone2} alt='screen shot of the bivo mobile website'/>
                        <img src={phone3} alt='screen shot of the bivo mobile website'/>
                        <img src={phone4} alt='screen shot of the bivo mobile website'/>
                    </div>
                    <div className='desktop-screenshots'>
                        <img loading='lazy' src={bivohomepage} alt='Bivo homepage desktop version'/>
                        <div className='middle-images'>
                            <img src={bivosearch} alt='Bivo search results page desktop version'/>
                            <img src={bivofilter} alt='Bivo filters for search results desktop version'/>
                        </div>
                        <img loading='lazy' src={bivolisting} alt='Bivo listing page desktop version'/>
                    </div>
                </div>
                <div className='prototype'>
                    <h2>Prototype</h2>
                    <p>I also made a functional prototype version of the Bivo website, crafted from the initial wireframes in Adobe XD. This interactive prototype allowed us to visualize and test the user flow, ensuring a cohesive and intuitive navigation experience. The arrows in the screenshot illustrate the planned interactions and transitions between different screens, providing a roadmap of the user journey. By simulating real user interactions, I was able to refine and optimize the design, ensuring that the final product would be both functional and delightful for all users.</p>
                    <img loading='lazy'className="moodboard xd" src={xdPrototype} alt='Screenshot of Adobe Xd showing prototype mode with Bivo wireframes'/>
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
export default ProjBivo