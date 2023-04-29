import { useContext } from "react";
import { Link } from "react-router-dom"
import { authCntext } from "../AuthContex/AuthContex";



const Register = () => {
const {createUser} = useContext(authCntext)
 console.log(createUser)
  const HandleToForm = (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUser(email,password)

    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(err => {
      console.log(err)
    })
  }
 
    return (
        <form onSubmit={HandleToForm}>
        
          

             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-left">
      <h1 className="text-5xl font-bold text-left">Please Register now!</h1>
    </div>


    


    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  placeholder="Name" name="name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" required placeholder="email" className="input input-bordered" />
        </div>
       

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
          Do you want to login ? <Link to={'/login'}>Register</Link>
        </div>
      </div>
    </div>
  </div>
</div>
        </form>
    );
};

export default Register;