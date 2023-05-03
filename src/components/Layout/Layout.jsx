import { Main, FooterText, BackGround, Footer } from "./Layout.styled";

const Layout = ({ children }) => {
    return (
        <BackGround>
            <Main>
                {children}
            </Main>
            <Footer>
                <FooterText>Lavrovs © 2023. All rights are reserved</FooterText>
            </Footer>
        </BackGround>
    )
}

export default Layout;