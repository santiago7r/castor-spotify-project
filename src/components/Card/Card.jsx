
import './Card.css';

const Card = ({ data }) => {
    const { img, mainText ="", subText="", handleOnClick } = data;

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