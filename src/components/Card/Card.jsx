/* eslint-disable react/prop-types */
import './Card.css';

const Card = ({ data }) => {
    const { img , mainText ="Main Text", subText="Sub Text" } = data;
    return (
        <div>
            <div>
                <img className="main-img" src={img} alt="" />
            </div>
            <div>
                <span className="main-text"> {mainText} </span>
                <span className="sub-text"> {subText} </span>
            </div>
        </div>
    )
}

export default Card