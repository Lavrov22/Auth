 import GoogleButton from 'react-google-button'
import { Link } from "./Home.styled";
import { useDispatch } from 'react-redux';
import { googleSignIn } from "../../redux/operations";


const Home = () => {
    const dispatch = useDispatch();
    return (
        <nav>
            <Link to="/login">Login with Firebase</Link>
            <Link to="/register">Register with Firebase</Link>
            <GoogleButton onClick={() => dispatch(googleSignIn())}/>
        </nav>
    )
}

export default Home;