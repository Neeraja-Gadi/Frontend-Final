import React from 'react';
import '../../styles/App.css';
import {second} from "../../images/index.js"


function Third()
{
    return (
        <div className="career">
            <div className="career-image">
                <img alt= "second" src={second}/>
            </div>
            <div className="career-desc">
                <div className="career-buttons">
                    <ul>
                       <li>Create the Career profile</li>
                       <li>Map your skills</li>
                       <li>Get a suitable job</li>
                    </ul>
                </div>
                <div className="career-ul">
                    <ul>
                        <li>Open Relevant job opportunities at the end of Selfassessment.</li>
                        <li>Providing critical information about prerequisites of job positions.</li>
                        <li>Leverage to share online your excellence.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Third;