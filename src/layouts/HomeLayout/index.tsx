import HeaderHome from "./HeaderHome.tsx"
import FooterHome from "./FooterHome.tsx";
import Poster from "../../pages/HomePage/Poster.tsx";

const HomeLayout = () =>{
    return (
        <>
            <HeaderHome/>
            <Poster/>
            <FooterHome/>
        </>
    )
}

export default HomeLayout;