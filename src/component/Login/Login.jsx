import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authCntext } from "../AuthContex/AuthContex";



const Login = () => {
  const [error,setError] = useState('')
  const [succes, setSucces] = useState('')
  const {singInUser} = useContext(authCntext)
  console.log(singInUser)
  const HandleTosignIn = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    singInUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
      setSucces('user login succesfull')
      setError('')
    })
    .catch(error => {
      console.log(error.message)
      setError(error.message)
      setSucces('')
    })
    
  }
  
     return (
        <form onSubmit={HandleTosignIn}>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-left">
      <h1 className="text-5xl font-bold text-left">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
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
        <p className=" text-green-500">{succes}</p>
        <p className=" text-red-700">{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      <div>
        Did you have register ? <Link to={'/register'}>Register</Link>
      </div>
    </div>
  </div>
</div>
        </form>
    );
};

export default Login;