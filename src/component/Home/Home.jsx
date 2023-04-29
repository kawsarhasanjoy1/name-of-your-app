import { useContext } from "react";
import { authCntext } from "../AuthContex/AuthContex";
import { Link } from "react-router-dom";


const Home = () => {
    const {user,logOut} = useContext(authCntext)
    const HandleToLogout = () => {
      logOut()
      .then(() => {

      })
      .catch(err => {
         console.log(err)
      })
    }
    return (
        <div className=" text-end mt-7">
           {
          user ? <button onClick={HandleToLogout} className=" btn btn-info py-2 px-10">SignOut</button> : <Link to={'/login'}><button className=" btn btn-info py-2 px-10">Login</button></Link>
        
        }
        </div>
    );
};

export default Home;