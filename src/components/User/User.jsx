import { useDispatch } from 'react-redux'
import { logOut } from "../../redux/operations";

const User = () => {

    const dispatch = useDispatch();
    
    return (
        <>
            <div>User</div>
            <button type="button" onClick={() => dispatch(logOut())}>log out</button>
        </>
    )
}

export default User;