import './index.scss'
import fb from '../../Photos/fb.png'
import insta from '../../Photos/insta.png'
import linkedin from '../../Photos/linkedin.png'

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
                    <div className='buttons'>
                        <a href='mailto:email@gmail.com'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#211349" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                            email@gmail.com
                            <span>
                                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233.67 233.7">
                                <g id="Layer_1-2" data-name="Layer 1">
                                <path className="cls-1" d="M101.04,233.64c-19.09,0-38.18.06-57.27-.01C18.26,233.53.14,215.52.08,190.04c-.09-38.18-.11-76.36,0-114.55.07-25.49,18.17-43.45,43.7-43.58,13.11-.07,26.23-.05,39.34,0,7.69.03,12.45,4.07,12.5,10.46.05,6.51-4.98,10.73-12.83,10.73-12.95,0-25.9-.07-38.84,0-13.97.08-22.66,8.79-22.67,22.76-.04,38.18-.04,76.36-.01,114.54,0,12.91,9.02,22.01,21.9,22.03,38.51.05,77.02.05,115.54,0,12.86-.02,21.81-9.04,21.9-22.05.08-13.61-.07-27.23.03-40.84.06-7.55,5.75-12.5,12.55-11.22,5.03.95,8.5,4.73,8.54,10.12.11,15.44.49,30.9-.18,46.31-.93,21.36-19.29,38.33-41.21,38.82-9.96.22-19.92.06-29.88.06-9.79,0-19.59,0-29.38,0Z"/>
                                <path className="cls-1" d="M195.88,21.2c-18.91,0-37.82.03-56.73-.02-6.5-.02-10.98-3.74-11.53-9.32-.66-6.7,3.85-11.72,11-11.79,13.1-.13,26.21-.04,39.32-.04,14.43,0,28.87-.04,43.3.01,8.66.03,12.39,3.78,12.41,12.48.04,27.04.03,54.08,0,81.12-.01,7.87-3.83,12.35-10.4,12.45-6.73.1-10.75-4.58-10.76-12.63-.02-18.56,0-37.13,0-57.02-2.18,2.09-3.65,3.45-5.07,4.86-26.87,26.86-53.73,53.73-80.6,80.58-1.29,1.29-2.55,2.65-4.03,3.68-4.12,2.87-9.7,2.34-13.27-1.11-3.73-3.59-4.37-9.37-1.36-13.63,1.04-1.48,2.41-2.73,3.7-4.02,26.39-26.4,52.78-52.8,79.19-79.17,1.83-1.83,3.86-3.45,5.8-5.16-.32-.42-.64-.85-.97-1.27Z"/>
                                </g>
                                </svg>
                            </span>
                        </button> 
                        </a> 
                        <a href='mailto:email@gmail.com'>
                        <button>
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.7 69.7">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path class="cls-1" d="M0,35.32c0-.34,0-.68,0-1.02.05-.21.12-.41.13-.62.04-.51.05-1.02.08-1.53.08-1.25.25-2.48.48-3.7.74-4.01,2.15-7.77,4.22-11.28,1.93-3.28,4.35-6.17,7.23-8.67,2.53-2.19,5.32-3.98,8.36-5.37C24.31,1.38,28.32.38,32.49.08c1.41-.1,2.83-.11,4.25-.03,1.56.09,3.11.26,4.65.55,3.6.67,7,1.88,10.2,3.65,6.31,3.49,11.1,8.45,14.39,14.86,1.51,2.95,2.56,6.07,3.15,9.34.22,1.21.38,2.44.48,3.67.09,1.05.06,2.11.08,3.16.02,1.4-.1,2.79-.28,4.17-.25,1.92-.67,3.82-1.25,5.67-1.97,6.28-5.44,11.59-10.39,15.92-4.24,3.71-9.11,6.23-14.59,7.58-2.05.5-4.13.82-6.24.92-.42.02-.84.05-1.26.08-.1,0-.19.05-.29.07h-.95c-.14-.03-.29-.07-.43-.08-.7-.05-1.4-.1-2.1-.14-1.2-.08-2.38-.26-3.56-.48-2.76-.52-5.42-1.37-7.97-2.55-4.71-2.18-8.74-5.24-12.08-9.2-3.28-3.89-5.6-8.29-6.96-13.19-.44-1.6-.77-3.22-.97-4.86-.12-1.06-.16-2.12-.25-3.18-.02-.23-.09-.46-.14-.69ZM29.8,26.73v.38c0,9.23,0,18.45,0,27.68,0,.41,0,.42.42.42.03,0,.07,0,.1,0,2.5,0,4.99,0,7.49,0q.54,0,.54-.55c0-4.66,0-9.33,0-13.99,0-.35,0-.7.01-1.06.03-.87.17-1.71.48-2.53.52-1.38,1.42-2.39,2.85-2.87.97-.33,1.98-.39,2.99-.21,1.04.18,1.89.68,2.52,1.53.28.39.49.81.66,1.26.4,1.07.52,2.19.52,3.31.01,4.85,0,9.69,0,14.54,0,.11,0,.23,0,.34,0,.14.07.21.2.22.07,0,.14,0,.2,0,2.68,0,5.36,0,8.04,0,.12,0,.24-.02.4-.04,0-.18,0-.34,0-.5,0-5.75,0-11.51,0-17.26,0-.66-.03-1.32-.07-1.97-.1-1.39-.42-2.73-.98-4.01-.99-2.27-2.62-3.9-4.93-4.82-1.01-.4-2.05-.62-3.13-.72-1.06-.1-2.11-.09-3.15.1-2.68.49-4.81,1.86-6.41,4.06-.05.07-.1.13-.21.26,0-.66,0-1.23,0-1.81,0-.59.05-1.17-.04-1.77h-8.51ZM15.39,26.73c0,.19-.02.35-.02.5,0,9.16,0,18.31,0,27.47,0,.1,0,.2,0,.31,0,.12.07.19.19.2.07,0,.14,0,.2,0,2.7,0,5.4,0,8.1,0,.12,0,.24-.02.35-.04.08-.38.07-28.18-.01-28.45h-8.82ZM25.02,17.77c.07-2.66-2.12-5.29-5.26-5.29-3,0-5.23,2.48-5.24,5.28,0,2.76,2.18,5.3,5.25,5.3,3.21,0,5.32-2.7,5.25-5.3Z"/>
                            </g>
                        </svg>
                            LinkedIn
                            <span>
                                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233.67 233.7">
                                <g id="Layer_1-2" data-name="Layer 1">
                                <path className="cls-1" d="M101.04,233.64c-19.09,0-38.18.06-57.27-.01C18.26,233.53.14,215.52.08,190.04c-.09-38.18-.11-76.36,0-114.55.07-25.49,18.17-43.45,43.7-43.58,13.11-.07,26.23-.05,39.34,0,7.69.03,12.45,4.07,12.5,10.46.05,6.51-4.98,10.73-12.83,10.73-12.95,0-25.9-.07-38.84,0-13.97.08-22.66,8.79-22.67,22.76-.04,38.18-.04,76.36-.01,114.54,0,12.91,9.02,22.01,21.9,22.03,38.51.05,77.02.05,115.54,0,12.86-.02,21.81-9.04,21.9-22.05.08-13.61-.07-27.23.03-40.84.06-7.55,5.75-12.5,12.55-11.22,5.03.95,8.5,4.73,8.54,10.12.11,15.44.49,30.9-.18,46.31-.93,21.36-19.29,38.33-41.21,38.82-9.96.22-19.92.06-29.88.06-9.79,0-19.59,0-29.38,0Z"/>
                                <path className="cls-1" d="M195.88,21.2c-18.91,0-37.82.03-56.73-.02-6.5-.02-10.98-3.74-11.53-9.32-.66-6.7,3.85-11.72,11-11.79,13.1-.13,26.21-.04,39.32-.04,14.43,0,28.87-.04,43.3.01,8.66.03,12.39,3.78,12.41,12.48.04,27.04.03,54.08,0,81.12-.01,7.87-3.83,12.35-10.4,12.45-6.73.1-10.75-4.58-10.76-12.63-.02-18.56,0-37.13,0-57.02-2.18,2.09-3.65,3.45-5.07,4.86-26.87,26.86-53.73,53.73-80.6,80.58-1.29,1.29-2.55,2.65-4.03,3.68-4.12,2.87-9.7,2.34-13.27-1.11-3.73-3.59-4.37-9.37-1.36-13.63,1.04-1.48,2.41-2.73,3.7-4.02,26.39-26.4,52.78-52.8,79.19-79.17,1.83-1.83,3.86-3.45,5.8-5.16-.32-.42-.64-.85-.97-1.27Z"/>
                                </g>
                                </svg>
                            </span>
                        </button> 
                        </a>
                        <a href='mailto:email@gmail.com'>
                        <button>
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.44 151.76">
                            <g id="Layer_1-2" data-name="Layer 1">
                            <path class="cls-1" d="M0,75.89c0-21.49-.01-42.98,0-64.47C.02,2.95,2.89.05,11.39.04,32.38,0,53.37-.06,74.36.16c2.32.02,5.17,1.27,6.85,2.9,13.35,13.03,26.53,26.23,39.59,39.55,1.43,1.46,2.51,3.96,2.52,5.99.16,30.99.13,61.97.09,92.96,0,6.86-3.18,10.14-10.05,10.15-34.32.06-68.64.06-102.95,0-7.39-.01-10.37-3.22-10.38-10.85-.03-21.66-.01-43.31-.01-64.97ZM9.34,9.32v133.12h104.75V49.45c-8.56,0-16.85,0-25.14,0-10.43,0-13.84-3.37-13.85-13.64,0-8.77,0-17.54,0-26.49H9.34ZM84.22,19.77c0,6.08-.14,11.54.1,16.98.05,1.23,1.37,3.4,2.19,3.44,5.98.3,11.98.16,17.95.16-6.82-6.93-13.26-13.48-20.25-20.58Z"/>
                            <path class="cls-1" d="M62.23,126.74c-10.98,0-21.96,0-32.94,0-3.22,0-6.34-.36-6.3-4.52.04-4.11,3.14-4.54,6.35-4.54,21.79,0,43.59.01,65.38,0,3.3,0,6.35.72,6.35,4.62,0,3.99-3.15,4.47-6.41,4.46-10.81-.04-21.63-.01-32.44-.01Z"/>
                            <path class="cls-1" d="M62.07,94.29c10.83,0,21.65.04,32.48-.02,3.27-.02,6.45.44,6.53,4.37.08,4.19-3.2,4.81-6.66,4.81-21.65-.03-43.31-.02-64.96,0-3.23,0-6.35-.37-6.45-4.44-.11-4.42,3.15-4.75,6.58-4.73,10.83.06,21.65.02,32.48.02Z"/>
                            <path class="cls-1" d="M43.61,48.58c-8.29.06-14.65-6.11-14.76-14.32-.11-8.22,6.11-14.75,14.21-14.92,8.29-.17,15.12,6.43,15.15,14.64.03,8.05-6.46,14.54-14.61,14.59ZM50.15,33.99c-.01-3.65-3.03-6.62-6.71-6.62-3.67,0-6.71,3.02-6.71,6.65,0,3.62,3.07,6.65,6.74,6.65,3.64,0,6.69-3.05,6.68-6.68Z"/>
                            <path class="cls-1" d="M43.79,51.28c10.07.1,18.13,6.28,20.06,15.34.69,3.23.52,6.34-3.17,7.27-3.76.94-5.1-1.49-5.75-4.99-.99-5.31-5.49-8.45-11.3-8.5-6.14-.05-10.33,2.96-11.59,8.65-.69,3.12-1.92,5.57-5.5,4.97-3.66-.61-3.86-3.54-3.53-6.57.99-9.23,10.02-16.27,20.78-16.17Z"/>
                            </g>
                        </svg>
                            See resume
                            <span>
                                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233.67 233.7">
                                <g id="Layer_1-2" data-name="Layer 1">
                                <path className="cls-1" d="M101.04,233.64c-19.09,0-38.18.06-57.27-.01C18.26,233.53.14,215.52.08,190.04c-.09-38.18-.11-76.36,0-114.55.07-25.49,18.17-43.45,43.7-43.58,13.11-.07,26.23-.05,39.34,0,7.69.03,12.45,4.07,12.5,10.46.05,6.51-4.98,10.73-12.83,10.73-12.95,0-25.9-.07-38.84,0-13.97.08-22.66,8.79-22.67,22.76-.04,38.18-.04,76.36-.01,114.54,0,12.91,9.02,22.01,21.9,22.03,38.51.05,77.02.05,115.54,0,12.86-.02,21.81-9.04,21.9-22.05.08-13.61-.07-27.23.03-40.84.06-7.55,5.75-12.5,12.55-11.22,5.03.95,8.5,4.73,8.54,10.12.11,15.44.49,30.9-.18,46.31-.93,21.36-19.29,38.33-41.21,38.82-9.96.22-19.92.06-29.88.06-9.79,0-19.59,0-29.38,0Z"/>
                                <path className="cls-1" d="M195.88,21.2c-18.91,0-37.82.03-56.73-.02-6.5-.02-10.98-3.74-11.53-9.32-.66-6.7,3.85-11.72,11-11.79,13.1-.13,26.21-.04,39.32-.04,14.43,0,28.87-.04,43.3.01,8.66.03,12.39,3.78,12.41,12.48.04,27.04.03,54.08,0,81.12-.01,7.87-3.83,12.35-10.4,12.45-6.73.1-10.75-4.58-10.76-12.63-.02-18.56,0-37.13,0-57.02-2.18,2.09-3.65,3.45-5.07,4.86-26.87,26.86-53.73,53.73-80.6,80.58-1.29,1.29-2.55,2.65-4.03,3.68-4.12,2.87-9.7,2.34-13.27-1.11-3.73-3.59-4.37-9.37-1.36-13.63,1.04-1.48,2.41-2.73,3.7-4.02,26.39-26.4,52.78-52.8,79.19-79.17,1.83-1.83,3.86-3.45,5.8-5.16-.32-.42-.64-.85-.97-1.27Z"/>
                                </g>
                                </svg>
                            </span>
                        </button> 
                        </a>
                    </div>
                    <div className='work-together'>
                        <h2>Let's work together </h2>
                        <p>I pride myself on my professionalism and positive attitude and believe I can be an asset to your project.</p>
                        <p>The skills I possess can be used in a wide range of environments. If you're not sure whether I can help you, please email me. I love discussing the exciting ideas people come up with and can help or point you in the right direction if needed.</p>
                        <p>I look forward to hearing from you soon!</p>
                        <p className='name'>Freya</p>    
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