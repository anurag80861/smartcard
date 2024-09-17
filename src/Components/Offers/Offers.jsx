import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
const Offers =()=>{
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Only For you</h1>
                <p>ON THE BEST SELLERS</p>
                <button>Check 'me out</button>
            </div>
            <div className='offers-right'>
                <img src= {exclusive_image} alt='exclusive-image'className="exclusive-image"/>
            </div>

        </div>
    );

}
export default Offers;
