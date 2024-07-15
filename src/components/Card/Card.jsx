/* eslint-disable react/prop-types */
import './Card.css';

const Card = ({ data }) => {
    const { img, mainText ="Main Text", subText="Sub Text" } = data;

    const handleOnClick = () => {
        console.log("CLICK ON the img")
    }
    
    return (
        <div>
            <div onClick={handleOnClick}>
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