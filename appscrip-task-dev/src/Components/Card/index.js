import './index.css'
import { FaRegHeart } from "react-icons/fa";

const Card = props => {
    const {primeDealsItems} = props
    const {imgUlr, productname} = primeDealsItems
    return(
        <div >
            <li className="list-type">
            <div className="card"> <img src = {imgUlr} alt = {imgUlr} className= "img-size"/></div>
            <p className="titel">{productname}</p>
            <p className="discription4"><span className="sing-text-decoration">Sign in</span> or Create an account to see price <a><FaRegHeart className="heart-icon"/></a></p>
            </li>
        </div>
    )
}

export default Card 