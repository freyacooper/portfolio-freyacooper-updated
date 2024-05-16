import sbbanner from '../../Photos/sbbanner.png'
import homepage from '../../Photos/screens/SBDeskandMob.png';
import './index.scss'
import { useEffect } from 'react';
import gallery from '../../gallery.json'
import { useState } from 'react';
import login from '../../Photos/elements/login_1.png'
import loginErr from '../../Photos/elements/loginErr_1.png'
import modal1 from '../../Photos/elements/modal1.png'
import modal2 from '../../Photos/elements/modal2.png'

function ProjSB() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [activeFilter, setActiveFilter] = useState('Tous'); // Initialize the active filter state

    // Function to handle filter button click
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const filteredGallery = activeFilter === 'Tous' ? gallery : gallery.filter(item => item.category === activeFilter);

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
                    <div className='gallery-container'>
                    <div className='filters'>
                        <button className={activeFilter === 'Tous' ? 'filter filter-active' : 'filter'} onClick={() => handleFilterClick('Tous')}>Tous</button>
                        <button className={activeFilter === 'Objets' ? 'filter filter-active' : 'filter'} onClick={() => handleFilterClick('Objets')}>Objets</button>
                        <button className={activeFilter === 'Appartements' ? 'filter filter-active' : 'filter'} onClick={() => handleFilterClick('Appartements')}>Appartements</button>
                        <button className={activeFilter === 'Hotels & Restaurants' ? 'filter filter-active' : 'filter'} onClick={() => handleFilterClick('Hotels & Restaurants')}>Hotels & Restaurants</button>
                    </div>
                        <div className='gallery'>
                            {filteredGallery.map(({imageUrl, title, category}) => (
                                <figure>
                                    <img src={imageUrl} alt=''/>
                                    <figcaption>{title}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h2>User authentication</h2>
                    <p>To ensure secure and controlled access to the gallery modification feature, I implemented a user authentication system. The client could access an 'edit mode' by entering their email address and password, which authenticated their identity by using JSON Web Tokens behind the scenes.</p>
                    <div className='login-container'>
                        <img src={login} alt='login screen'/>
                        <img src={loginErr} alt='login screen with error message'/>
                    </div>
                    <p>Once the user has logged in to 'edit mode', they can modify the gallery. Clicking the modify button opens a window where they can remove photos from the gallery or add new ones.</p>
                    <div className='modal-container'>
                        <img src={modal1} alt='login screen'/>
                        <img src={modal2} alt='login screen with error message'/>
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
export default ProjSB