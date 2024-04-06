import { Link } from "react-router-dom";
export default function Homepage() {
    return(
        <div className="ma3 mv4">
        <h1>Welcome!</h1>
        <Link
          className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black"
          to={`register`}
        >
          Register</Link> 

          <br/>
        <Link 
          className="f4 fw6 db green no-underline underline-hover"
          to ={`register`}
        >
          Dont have an account?</Link>
      </div>
    );
}