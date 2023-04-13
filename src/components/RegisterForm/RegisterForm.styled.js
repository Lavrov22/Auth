import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Form, Field, ErrorMessage  } from "formik";

export const FormLogin = styled(Form)`
    width: 618px;
    padding: 60px 80px;
    background: linear-gradient(#2e3a6a,#2f0b45);
    border-radius: 40px;
    opacity: 0.85;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 30px;
    line-height: 1.4;
    letter-spacing: 0.04em;
    text-align: center;
    margin-bottom: 30px;
    color: #7f8291;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
    left: 20px;
    color: #7f8291;
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 15px;
    &:last-of-type{
        margin-bottom: 30px;
    }
`
export const Input = styled(Field)`
    display:block;
    position: relative;
    left: -20px;
    width: 100%;
    background: rgba(255,255,255,0.2);
    border: none;
    border-radius: 20px;
    box-shadow: none;
    height: 52px;
    padding: 0 20px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    transition: all 0.3s ease;
    &:focus, :hover{
        border: 2px solid;
    }
`

export const Button = styled.button`
    width: 100%;
    background: #eec111;
    padding: 17px 20px;
    border: none;
    font-size: 14px;
    font-weight: bold;
    color: #8188A5;
    border-radius: 20px;
    text-transform: uppercase;
    margin-bottom: 40px;
    transition: all 0.3s ease;
    &:focus, :hover{
       background: #BE9A0D;
       color: #FFFFFF;
    }
`

export const Error = styled(ErrorMessage)`
    position: absolute;
    top: 80px;
    font-size: 12px;
    line-height: 1.4;
    letter-spacing: 0.03em;
    color: rgb(229, 62, 62);
`

export const Text = styled.p`
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: #615f6c;
    text-align: center;
`

export const Link = styled(NavLink)`
    display: inline-block;  
    color: #ffffff;
     &:focus, :hover{
       color: #eec111;
    }

`