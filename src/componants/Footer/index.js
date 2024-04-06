import './index.scss'
import fb from '../../Photos/fb.png'
import insta from '../../Photos/insta.png'
import linkedin from '../../Photos/linkedin.png'
import mail from '../../Photos/mail.png'

function Footer() {
    // const location = useLocation();
    // const pagesToHideCta = ['/contact'];
    // const shouldHideCta = pagesToHideCta.includes(location.pathname);
    
    return(
        <div>
            {/* {!shouldHideCta && (
                <div className='cta'>
                    <div className='image'>
                        <img src={mail} alt="vecteur d'un homme envoyant une lettre à bord d'un avion en papier"/>
                    </div>
                    <div>
                        <h2>Let's work together</h2>
                        <p>Just a small paragraph to say something more about why they should contact me very friendly.</p>
                         <Link to='/contact'>
                            <button>Get in touch</button> 
                        </Link> 
                    </div>
                </div>
            )} */}
                <div className='cta' id='contact'>
                    <div className='image'>
                        <img src={mail} alt="vecteur d'un homme envoyant une lettre à bord d'un avion en papier"/>
                    </div>
                    <div>
                        <h2>Travaillons ensemble</h2>
                        <p>Je suis fier de mon professionnalisme et de mon attitude positive et je suis convaincu que je peux être un atout pour votre projet.</p>
                        <p>Les compétences que je possède peuvent être utilisées dans un grand nombre d'environnements. Si vous n'êtes pas sûr que je puisse vous aider, n'hésitez pas à m'envoyer un courriel. J'adore discuter des idées passionnantes que les gens proposent et je peux vous aider ou vous orienter dans la bonne direction si nécessaire. </p>
                        <p>J'espère avoir bientôt de vos nouvelles !</p>
                        <p className='name'>Freya</p>
                        <a href='mailto:email@gmail.com'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#8a66cc" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                </svg>
                                email@gmail.com
                            </button> 
                        </a>        
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
                <div className='socials undersocials'>
                    <img src={fb} alt=""/>
                    <img src={insta} alt=""/>
                    <img src={linkedin} alt=""/>
                </div>
            </div> 
        </div>
    )
}
export default Footer