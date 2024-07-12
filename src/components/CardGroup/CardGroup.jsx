/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import './CardGroup.css';

const CardGroup = ({ cardItems = [], title = "test" }) => {
    if(!cardItems.length){
        return <div></div>
    }
    return (
        <div>
            <span className='main-title'>{title}</span>
            <div className='grid-container'>
                {cardItems.map((item, i) => <Card data={item} key={i}/>)}
            </div>
        </div>
    )
}

export default CardGroup