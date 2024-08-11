import { Component } from "react"
import Card from '../Card'
import './index.css'
class Items extends Component {
    state = {
        primeDeals: []
    }
    componentDidMount = async() => {
        const {primeDeals} = this.state
        const resopnese = await fetch('https://fakestoreapi.com/products');
        const data = await resopnese.json();
        const obje = data.map(product => ({
            imgUlr : product.image,
            productname : product.title

        }))
        this.setState({primeDeals : obje});
        // console.log(obje);
    }
    render(){
        const {primeDeals} = this.state

        console.log(primeDeals);
       
        return(
            <div >    
            <ul className="flext-item">
            {primeDeals.map(eachItem => (
                <Card primeDealsItems = {eachItem}/>
                ))}
            </ul>
            </div>
            
        )
    }
    
}

export default Items