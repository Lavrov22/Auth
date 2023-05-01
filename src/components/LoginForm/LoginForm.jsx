import { Formik } from "formik";
import { object, string } from 'yup';
import { useDispatch } from 'react-redux'
import { login } from "../../redux/operations";
import { FormLogin, Label, Input, Button, Error, Title, Text, Link } from "./LoginForm.styled";



const initialValues = {
    email: '',
    password: ''
}

const loginFormSchema = object().shape({
    email: string()
        .email('Invalid email address')
        .required('Email is required'),
    password: string()
        .min(7, 'Password must be at least 7 characters')
        .max(32, 'Password must be at most 32 characters')
        .required('Password is required'),
})

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const { resetForm } = actions;
        const { error } = dispatch(login(values));
        if (!error) {
            resetForm();
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={loginFormSchema} onSubmit={handleSubmit}>
            <FormLogin autoComplete="off">
                <Title>Login</Title>
                <Label htmlFor="login">
                    Email
                    <Input type='text' name='email' />
                    <Error name="email" component="div" />
                </Label>
                <Label htmlFor="password">
                    Password
                    <Input type='password' name='password' />
                    <Error name="password" component="div" />
                </Label>
                <Button type="submit">Sign In</Button>
                <Text>Don't have an account? <Link to="/register">Register</Link></Text>
            </FormLogin>
        </Formik>
    )
}

export default LoginForm;