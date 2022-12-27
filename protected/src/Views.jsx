import App from "./App";
import { Link } from "react-router-dom";

function Views(){
    return(
        <App>
         <Link to="/">Sign In page</Link>
         <Link to="/home">Home Page</Link>
         <Link to="/account">Account page</Link>
        </App>
    )
}
export default Views;