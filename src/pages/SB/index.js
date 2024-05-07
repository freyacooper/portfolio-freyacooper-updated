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
        </div>
    )
}
export default ProjSB