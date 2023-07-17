import React from 'react';
import '../../styles/App.css';
import {map} from '../../images/index.js';
import {iitmrs} from '../../images/index.js';
import {iitmgate} from '../../images/index.js';


function Fifth()
{
    return(
        <div className="headquarter">
            <div className="head01">
                <div className="headmain">
                    <h1>Headquarter</h1>
                </div>
                <div className="email-phone">
                     <h2>Email</h2>
                     <h2>Phone</h2>
                </div>
            </div>

            <div className="head02">
               <div className="head02-image1">
                   <div className="image11">
                      <img alt="iitmrs" src={iitmrs} />
                   </div>
                   <div class="image12"> 
                      <img  alt = "iitmgate" src={iitmgate} />
                   </div>
                </div>
                <div class="head02-image2">
                      <img alt="map" src={map} />
                </div>
            </div>

            <div className="head03">
                   <h1>
                       1st Floor E-Block, IC-RTBI, IITM Research Park, Chennai-600113
                   </h1>
            </div>

        </div>
    )
}

export default Fifth;