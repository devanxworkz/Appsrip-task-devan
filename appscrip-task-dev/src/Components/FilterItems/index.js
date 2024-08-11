import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './index.css'
const FilterItems = () => {
    return(
        <div className="filter-container2">
            <input type = "checkbox" />
            <label className="main-filter-deails">COUSTOMIZBLE</label>
            <hr/>
            <div className="ideal-dwonArrow">
            <div>
            <p className="main-filter-deails">IDEAL FOR </p>
            <p>All</p>
            </div>
            <a><MdOutlineKeyboardArrowDown /></a>
            </div>
            <hr/>
            <div className="ideal-dwonArrow">
            <div>
            <p  className="main-filter-deails">OCCASION</p>
            <p>All</p>
            </div>
            <a><MdOutlineKeyboardArrowDown /></a>
            </div>
            <hr/>
            <div className="ideal-dwonArrow">
            <div>
            <p  className="main-filter-deails">WORK</p>
            <p>All</p>
            </div>
            <a><MdOutlineKeyboardArrowDown /></a>
            </div>
            <hr/>
            <div className="ideal-dwonArrow">
            <div>
            <p  className="main-filter-deails">FABRIC</p>
            <p>All</p>
            </div>
            <a><MdOutlineKeyboardArrowDown /></a>
            </div>
            <hr/>
            <div className="ideal-dwonArrow">
            <div>
            <p  className="main-filter-deails">SEGMENT</p>
            <p>All</p>
            </div>
            <a><MdOutlineKeyboardArrowDown /></a>
            </div>
            <hr/>
            <div className="ideal-dwonArrow">
            <div>
            <p  className="main-filter-deails">SUITABLE FOR </p>
            <p>All</p>
            </div>
            <a><MdOutlineKeyboardArrowDown /></a>
            </div>
            <hr/>
            <div className="ideal-dwonArrow">
            <div>
            <p  className="main-filter-deails">ROW MATERIALS</p>
            <p>All</p>
            </div>
            <a><MdOutlineKeyboardArrowDown /></a>
            </div>
            <hr/>
            <div className="ideal-dwonArrow">
            <div>
            <p  className="main-filter-deails">PATTERN</p>
            <p>All</p>
            </div>
            <a><MdOutlineKeyboardArrowDown /></a>
            </div>
            <hr/>
            
        </div>
    )
}
export default FilterItems