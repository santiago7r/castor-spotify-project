/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Card.css';
import Details from '../Details';

const Card = ({ data }) => {
    const [showDetails, setShowDetails] = useState(false)
    const { img, mainText ="Main Text", subText="Sub Text" } = data;

    const handleOnClick = () => {
        setShowDetails(!showDetails)
    }
    
    return (
        <div>
            <div onClick={handleOnClick}>
                <img className="main-img" src={img} alt="" />
                {showDetails ? <Details /> : ''}
            </div>
            <div>
                <span className="main-text"> {mainText} </span>
                <span className="sub-text"> {subText} </span>
            </div>
        </div>
    )
}

export default Card