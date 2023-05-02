import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 618px;
    padding: 60px 80px;
    background: linear-gradient(#2e3a6a,#2f0b45);
    border-radius: 40px;
    opacity: 0.85;
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

export const Text = styled.p`
    font-weight: 700;
    font-size: 30px;
    line-height: 1.4;
    letter-spacing: 0.04em;
    text-align: center;
    margin-bottom: 30px;
    color: #7f8291;
`