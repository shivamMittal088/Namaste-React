import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = ()=> {
    // subscribing to the store .
    const CartItems = useSelector((store)=>
            store.cart.items
    )
    // useSelector hook  is used to read data from the store .

    console.log(CartItems)
    return (
        <div id="logo">
            <img src="src\DATA\images\logo\Res-logo.jpg" alt="Logo"></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="">ContactUs</Link></li>
                <li>Cart - ({CartItems.length} items)</li>
                <li><Link to="">Login</Link></li>
            </ul>
        </div>
    )
}

export default Header;

// anchor tag refreshes the whole page , while link tag will not .