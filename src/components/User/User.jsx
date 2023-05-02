import { useDispatch, useSelector } from 'react-redux'
import { logOut } from "../../redux/operations";
import { Button, Wrapper, Text } from "./User.styled";

const User = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    return (
        <Wrapper>
            <Text>{user.email}</Text>
            <Button type="button" onClick={() => dispatch(logOut())}>log out</Button>
        </Wrapper>
    )
}

export default User;