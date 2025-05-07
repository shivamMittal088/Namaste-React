import { Link } from "react-router-dom";

const Header = ()=> {
    return (
        <div id="logo">
            <img src="src\DATA\images\logo\Res-logo.jpg" alt="Logo"></img>
            <ul>
                <li><a href="/">Home</a></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="">ContactUs</a></li>
                <li><a href="">Cart</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    )
}

export default Header;

// anchor tag refreshes the whole page , while link tag will not .