import { NavLink } from "react-router-dom";
import styled from 'styled-components'


export const Link = styled(NavLink)`
    width: 100%;
    background: #eec111;
    padding: 17px 20px;
    border: none;
    font-size: 14px;
    font-weight: bold;
    color: #8188A5;
    text-align: center;
    transition: all 0.3s ease;
    &:focus, :hover{
       background: #BE9A0D;
       color: #FFFFFF;
    }
    &:not(:last-child){
        margin-bottom: 20px;
    }
`