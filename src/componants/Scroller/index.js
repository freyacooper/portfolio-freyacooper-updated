import './index.scss'
import react from '../../Photos/reactDark.png'
import redux from '../../Photos/reduxDark.png'
import html from '../../Photos/htmlDark.png'
import js from '../../Photos/jsDark.png'
import sass from '../../Photos/sassDark.png'
import ai from '../../Photos/aiDark.png'
import xd from '../../Photos/xdDark.png'
import figma from '../../Photos/figmaDark.png'


function Scroller() {
    return(
        <div className="scroller-container">
            
            <div>
                <img alt="" src={react}/>
                <img alt="" src={html}/>
                <img alt="" src={js}/>
                <img alt="" src={sass}/>
                <img alt="" src={redux}/>
                <img alt="" src={ai}/>
                <img alt="" src={xd}/>
                <img alt="" src={figma}/>
            
                <img alt="" src={react}/>
                <img alt="" src={html}/>
                <img alt="" src={js}/>
                <img alt="" src={sass}/>
                <img alt="" src={redux}/>
                <img alt="" src={ai}/>
                <img alt="" src={xd}/>
                <img alt="" src={figma}/>
           
            </div>
            
        </div>
    )
}
export default Scroller