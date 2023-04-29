import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='space-x-5 bg-green-500 p-5 rounded-md'>
            <Link to={'/'}>Home</Link>
            <Link to={'login'}>Login</Link>
            <Link to={'register'}>Register</Link>
        </div>
    );
};

export default Header;