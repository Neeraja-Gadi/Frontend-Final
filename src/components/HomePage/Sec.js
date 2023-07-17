import React from 'react'
import '../../styles/App.css'
import { third } from '../../images/index.js'


function Sec() {

    const imageStyle = {

        marginTop: '5px',
 
        
    }

    const caption = {
        textAlign: 'center',
    }

    return (
        <div className="smart-tech">
            <div className="smart-tech-01">
                <div className="smart-tech-desc">
                    <h1>A smart tech- ecosystem for hiring the best nurtured talent</h1>
                    <ul>
                        <li>Quality assessed talent at the doorstep.</li>
                        <li>Providing deeper insights on soft <span>&</span> hard skills set.</li>
                        <li>Providing analytical evaluation metrix based on overall performance in the field of expertise.</li>
                        <li>Provide talent from a diversified wide talent pool.</li>
                        <li> Engage for the selection only if the candidate skills are compatible for the professional responsibilties.</li>
                    </ul>
                </div>

                <div className="smart-tech-image">
                    <div className="image-border">
                    <img style={imageStyle}  alt= "third" src={third} />
                        <h1 style={caption}>Hiclousia AI-Talent Acquisition</h1>
                    </div>
                    
                </div>

              
            </div>
        </div>
    )

}
export default Sec;