import { LdsGrid, LdsGridChild } from "./Loader.styled";
import Layout from "../Layout/Layout";

const Loader = () => {
    return (
        <Layout>
            <LdsGrid>
                <LdsGridChild></LdsGridChild>
                <LdsGridChild></LdsGridChild>
                <LdsGridChild></LdsGridChild>
                <LdsGridChild></LdsGridChild>
                <LdsGridChild></LdsGridChild>
                <LdsGridChild></LdsGridChild>
                <LdsGridChild></LdsGridChild>
                <LdsGridChild></LdsGridChild>
                <LdsGridChild></LdsGridChild>
            </LdsGrid>
        </Layout>
    )
}

export default Loader;