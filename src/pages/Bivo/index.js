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

function ProjBivo() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Back />
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
                    <img className='moodboard' src={Moodboard} alt='Moodboard for Bivos brand identity, logos, brand colour scheme, images to show the feeling of the brand.'/>
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
                    <img className='moodboard' src={webDesignElemets} alt='Elements of the Bivo website, buttons, checkboxes, toggles switches for example.'/>
                </div>
                <div className='wireframes'>
                    <h2>Wireframes</h2>
                    <p>Introducing our design process, I began by crafting the mobile version of the site, prioritizing a seamless and user-friendly experience for individuals who may be accessing Bivo while on the move. Recognizing the prevalence of mobile usage, each aspect was meticulously designed to ensure ease of navigation and engagement. Subsequently, I expanded the focus to include desktop and tablet versions, ensuring that Bivo's interface remains intuitive and visually appealing across all devices.</p>
                    <img  className='moodboard xd' src={xdMobile} alt='Screenshot of Xd file with mobile wireframes'/>
                    <div className='phones'>
                        <img src={phone1} alt='screen shot of the bivo mobile website'/>
                        <img src={phone2} alt='screen shot of the bivo mobile website'/>
                        <img src={phone3} alt='screen shot of the bivo mobile website'/>
                        <img src={phone4} alt='screen shot of the bivo mobile website'/>
                    </div>
                    <div className='desktop-screenshots'>
                        <img src={bivohomepage} alt='Bivo homepage desktop version'/>
                        <div className='middle-images'>
                            <img src={bivosearch} alt='Bivo search results page desktop version'/>
                            <img src={bivofilter} alt='Bivo filters for search results desktop version'/>
                        </div>
                        <img src={bivolisting} alt='Bivo listing page desktop version'/>
                    </div>
                </div>
                <div className='prototype'>
                    <h2>Prototype</h2>
                    <p>I also made a functional prototype version of the Bivo website, crafted from the initial wireframes in Adobe XD. This interactive prototype allowed us to visualize and test the user flow, ensuring a cohesive and intuitive navigation experience. The arrows in the screenshot illustrate the planned interactions and transitions between different screens, providing a roadmap of the user journey. By simulating real user interactions, I was able to refine and optimize the design, ensuring that the final product would be both functional and delightful for all users.</p>
                    <img className="moodboard xd" src={xdPrototype} alt='Screenshot of Adobe Xd showing prototype mode with Bivo wireframes'/>
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