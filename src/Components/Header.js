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
        <div className="flex justify-between shadow-sm mb-2.5 px-6 py-4  bg-pink-200 ">
            <img src="src\DATA\images\logo\Res-logo.jpg" alt="Logo" className="w-46"></img>
            <ul className="flex p-4 m-4 gap-4">
                <li className="hover:text-pink-600 hover:scale-105"><Link to="/">Home</Link></li>
                <li className="hover:text-pink-600 hover:scale-105"><Link to="/about">About</Link></li>
                <li className="hover:text-pink-600 hover:scale-105"><Link to="">ContactUs</Link></li>
                <li className="text-gray-800">Cart - ({CartItems.length} items)</li>
                <li className="hover:text-pink-600 hover:scale-105"><Link to="">Login</Link></li>
            </ul>
        </div>
    )
}

export default Header;

// anchor tag refreshes the whole page , while link tag will not .