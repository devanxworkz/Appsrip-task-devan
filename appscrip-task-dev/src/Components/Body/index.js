import './index.css'
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FilterItems from '../FilterItems'
import Items from '../Items'
import Footer from '../Footer';

const Body = () => {
    return(
        <div>
        <p className="home">HOME | <span className="shop">SHOP</span></p>
        <div className="discover-container">
     
        <h1 className="dicover-headin">DISCOVER OUR PRODUCTS</h1>
        <p className='discription3'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br/>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
        <hr/>
        <div className="filter-container">
        <div className="filter-recomtion">
        <div className="filter-items">
        <p className="items-heading">3425ITEMS</p>
            <p className="hide-filter"><a className="left-arr-span"><RiArrowLeftSLine /></a>HIDE FILTER</p>        
        </div>
        <h4 className="recommedation">RECOMMENDED <a><MdOutlineKeyboardArrowDown /></a> </h4>
        </div>
        </div>
        <hr/>
        <div className="filter-items-container">
        <FilterItems/>
        <Items/>
        </div>
        <Footer/>
        </div>
        
      
        
    )
}

export default Body