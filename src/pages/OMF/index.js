import omfbanner from '../../Photos/omfbanner.png'
import homepage from '../../Photos/screens/OMFDeskandMob.png'
import './index.scss'
import { useEffect } from 'react';
import restaurant from '../../Photos/elements/omfrestaurant.jpg'
import tick from '../../Photos/elements/tick.svg'
import omfmob from '../../Photos/elements/omfmob.png'
import omfdesk from '../../Photos/elements/omfdesk.png'
import arrow from '../../Photos/elements/arrow_2.png'
import menuanim from '../../Photos/elements/menuanim3.gif'
import homeanim from '../../Photos/elements/homeanim.gif'
import SassFolders from '../../Photos/elements/SassFolders.png'
import SassVariables from '../../Photos/elements/SassVariables.png'
import SassMixins from '../../Photos/elements/SassMixins.png'


function ProjOMF() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <img src={omfbanner} alt="" className='project-banner'/>
            <div className='page'>
                <h1>Oh My Food</h1>
                <div className='tag-container'>
                    <div className='tag webdev'>
                        Web development
                    </div>
                    <div className='tag html'>
                        HTML
                    </div>
                    <div className='tag sass'>
                        SASS
                    </div>
                </div>
                <div className='section'>
                    <div className='image'>
                        <img src={homepage} alt=''/>
                    </div>
                    <div className='text'>
                        <p>Welcome to the world of Oh My Food—a conceptual venture imagined to revolutionize the dining experience. As well as classic reservation systems, Oh My Food's website allows users to select items from the menus and place orders from a distance, ensuring a swift dining experience and lowering restaurant wait-times.</p>
                        <p>In this project, I was tasked with bringing Oh My Food's innovative vision to life through web development. With an emphasis on the use of Sass to organize the styling and leveraging CSS animations, the aim was to create a dynamic and engaging interface that captivates users from the moment they land on the page. Through a mobile-first approach, the goal was to craft an experience that seamlessly integrates advanced styling techniques, enhancing user interaction and elevating Oh My Food's online presence.</p>
                    </div>
                </div>
                <div>
                    <h2>Mobile-first approach</h2>
                    <p>In crafting the Oh My Food website, a mobile-first approach was essentiel for ensuring a user experience tailored to the needs of our target audience. With busy professionals in mind, our primary users are individuals seeking to enjoy a dine-in restaurant experience during their lunch breaks. As our users are often on the go, accessing the website from their smartphones is the norm. Therefore, adopting a mobile-first strategy was a natural choice, allowing us to prioritize mobile usability and optimize the interface for smaller screens. By designing with mobile users in mind, we ensure that Oh My Food remains a convenient and efficient solution for our busy clientele.</p>
                    <div className='mobile-first'>
                        <img className='mobfirst-screen' src={omfmob} alt='mobile version of website'/>
                        <img className='arr' src={arrow} alt='arrow pointing to the right'/>
                        <img className='mobfirst-screen' src={omfdesk} alt='desktop version of website'/>
                    </div>
                </div>
                <div className='section-div'>
                    <h2>Advantages of Sass</h2>
                    <div className='sass-div'>
                        <p>In this project, I was introduced to the power of Sass, a CSS preprocessor that revolutionizes the way stylesheets are written and managed. Sass extends the capabilities of CSS by introducing features like variables, mixins, nesting, and more. With Sass, stylesheets can be broken down into smaller, modular components, facilitating better organization and enhancing code readability. Additionally, Sass's variable feature allows for the creation of reusable values, making it simpler to maintain consistency across the project and facilitating future updates.</p>
                        <div>
                            <img src={SassFolders} alt='Screenshot of Sass folder architecture'/>
                            <p className='caption'>Sass folder organization</p>
                        </div>
                    </div>
                    <div className='sass-div-photos'>
                        <div>
                           <img src={SassVariables} alt='Screenshot of Sass variables'/>
                           <p className='caption'>Sass variables used for this project</p>
                        </div>
                        <div>
                           <img src={SassMixins} alt='Screenshot of Sass mixins'/>
                           <p className='caption'> Examples of Sass mixins using the variables</p> 
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Animations</h2>
                   
                        <p>This project placed a significant emphasis on incorporating animations to enhance the user experience. Animations play a crucial role in capturing user attention, guiding interactions, and adding a layer of engagement to the website. By incorporating animations strategically, we aimed to create a dynamic and memorable browsing experience for visitors.</p>
                    <div className='p1'>     
                        <img className='gif' src={menuanim} alt='gif showing menu animation'/>
                        <img className='gif' src={homeanim} alt='gif showing homepage animation'/>
                    </div>
                        <p>The animations in this project were built entirely with CSS, meaning they are lightweight and do not require additional JavaScript libraries or plugins, resulting in faster load times and smoother performance. This approach also promotes cleaner code and easier maintenance, as animations can be seamlessly integrated into the existing stylesheet. </p>
                    
                    <div className='menu-div'>
    <div class="rest-image">
        <img src={restaurant} alt="Une assiette de nourriture sur une table."/>
    </div>
    <div class="restaurant">
        <div class="restaurant__title">
            <h2>À la française</h2>
            <div class="hearts-wrapper">
                <svg class="liked" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.865 1.43593C17.5103 -0.753131 14.0083 -0.359381 11.847 2.07343L11.0005 3.02499L10.154 2.07343C7.99701 -0.359381 4.49076 -0.753131 2.13607 1.43593C-0.562363 3.94843 -0.704161 8.45781 1.71068 11.1812L10.0251 20.5469C10.5622 21.1516 11.4345 21.1516 11.9716 20.5469L20.2861 11.1812C22.7052 8.45781 22.5634 3.94843 19.865 1.43593Z" fill="url(#paint0_linear_90763_527)"/>
                    <defs>
                    <linearGradient id="paint0_linear_90763_527" x1="11.0002" y1="-5.4601" x2="3.43443" y2="27.9923" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9356DC" offset="0"/>
                    <stop offset="1" stop-color="#FF79DA"/>
                    </linearGradient>
                    </defs>
                </svg>
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_90763_518" fill="white">
                    <path d="M19.865 1.43593C17.5103 -0.753131 14.0083 -0.359381 11.847 2.07343L11.0005 3.02499L10.154 2.07343C7.99701 -0.359381 4.49076 -0.753131 2.13607 1.43593C-0.562363 3.94843 -0.704161 8.45781 1.71068 11.1812L10.0251 20.5469C10.5622 21.1516 11.4345 21.1516 11.9716 20.5469L20.2861 11.1812C22.7052 8.45781 22.5634 3.94843 19.865 1.43593Z"/>
                    </mask>
                    <path d="M19.865 1.43593C17.5103 -0.753131 14.0083 -0.359381 11.847 2.07343L11.0005 3.02499L10.154 2.07343C7.99701 -0.359381 4.49076 -0.753131 2.13607 1.43593C-0.562363 3.94843 -0.704161 8.45781 1.71068 11.1812L10.0251 20.5469C10.5622 21.1516 11.4345 21.1516 11.9716 20.5469L20.2861 11.1812C22.7052 8.45781 22.5634 3.94843 19.865 1.43593Z" stroke="#101010" stroke-width="2" mask="url(#path-1-inside-1_90763_518)"/>
                </svg>
            </div>
        </div>
        <div class="menu">
            <div class="menu__course">
                <h3>Entrées</h3>    
            </div>
            <div class="menu__group">
                <div class="menu-item menu-item--1">
                    <div class="menu-item__content">
                        <h4>Tartare de poulpe acidulé</h4>
                        <p>Aux zestes d'orange</p> 
                    </div>
                    <h5>25€</h5>
                    <div class="menu-item__check">
                        <img src={tick} alt='tick'/>
                    </div>
                </div>
                <div class="menu-item menu-item--2">
                    <div class="menu-item__content">
                        <h4>Velouté de légumes d'antan</h4>
                        <p>Carotte, panais, topinambour</p> 
                    </div>
                    <h5>35€</h5>
                    <div class="menu-item__check">
                        <img src={tick} alt='tick'/>
                    </div>
                </div>
            </div>
            <div class="menu__course">
                <h3>Plats</h3>    
            </div>
            <div class="menu__group">
                <div class="menu-item menu-item--1">
                    <div class="menu-item__content">
                        <h4>Coquilles Saint-Jacques</h4>
                        <p>Accompagnées d'une purée de panais</p> 
                    </div>
                    <h5>40€</h5>
                    <div class="menu-item__check">
                        <img src={tick} alt='tick'/>
                    </div>
                </div>
                <div class="menu-item menu-item--2">
                    <div class="menu-item__content">
                        <h4>Magret de canard</h4>
                        <p>Et parmentier de pommes de terre</p> 
                    </div>
                    <h5>35€</h5>
                    <div class="menu-item__check">
                        <img src={tick} alt='tick'/>
                    </div>
                </div>
                <div class="menu-item menu-item--3">
                    <div class="menu-item__content">
                        <h4>Pigeonneau d’Ille-et-Vilaine</h4>
                        <p>Sur son lit de gnocchis aux légumes</p> 
                    </div>
                    <h5>44€</h5>
                    <div class="menu-item__check">
                        <img src={tick} alt='tick'/>
                    </div>
                </div>
            </div>
            <div class="menu__course">
                <h3>Desserts</h3>    
            </div>
            <div class="menu__group">
                <div class="menu-item menu-item--1">
                    <div class="menu-item__content">
                        <h4>Fondant au chocolat</h4>
                        <p>Revisitée</p> 
                    </div>
                    <h5>22€</h5>
                    <div class="menu-item__check">
                        <img src={tick} alt='tick'/>
                    </div>
                </div>
                <div class="menu-item menu-item--2">
                    <div class="menu-item__content">
                        <h4>Millefeuille croustillant</h4>
                        <p>Myrtilles et pâte d’amande</p> 
                    </div>
                    <h5>23€</h5>
                    <div class="menu-item__check">
                        <img src={tick} alt='tick'/>
                    </div>
                </div>
            </div>
        </div>
        <div class="button">Commander</div>
    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjOMF