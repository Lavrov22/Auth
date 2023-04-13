import { Formik } from "formik";
import { object, string, ref } from 'yup';
import { useDispatch } from 'react-redux'
import { register } from "../../redux/operations";

import { FormLogin, Label, Input, Button, Error, Title, Text, Link } from "./RegisterForm.styled";

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}



const registerFormSchema = object().shape({
    email: string()
        .email('Invalid email address')
        .required('Email is required'),
    password: string()
        .min(7, 'Password must be at least 7 characters')
        .max(32, 'Password must be at most 32 characters')
        .required('Password is required'),
     confirmPassword: string()
        .required("Please confirm your password")
        .oneOf([ref("password")], "Passwords do not match"),
})

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const { resetForm } = actions;
        const { error } = dispatch(register(values));
        if (!error) {
            resetForm();
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={registerFormSchema} onSubmit={handleSubmit}>
            <FormLogin autoComplete="off">
                <Title>Register</Title>
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
                  <Label htmlFor="confirmPassword">
                    Confirm Password
                    <Input type='password' name='confirmPassword' />
                    <Error name="confirmPassword" component="div" />
                </Label>
                <Button type="submit">Register</Button>
                <Text>Already have an account? <Link to="/">Login</Link></Text>
            </FormLogin>
        </Formik>
    )
}

export default RegisterForm;