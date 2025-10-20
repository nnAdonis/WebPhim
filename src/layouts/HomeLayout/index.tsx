import HeaderHome from "./HeaderHome.tsx"
import FooterHome from "./FooterHome.tsx";
import Poster from "../../pages/HomePage/Poster.tsx";
import Topics from "../../pages/HomePage/Topics.tsx";
import History from "../../pages/HomePage/History.tsx";
import TopicsList from "../../pages/HomePage/TopicsList.tsx";


const HomeLayout = () =>{
    return (
        <>
            <HeaderHome/>
            <Poster/>
            <div className={`m-auto max-w-[1860px]`}>
                <Topics/>
                <History/>
                <TopicsList/>
            </div>

            <FooterHome/>
        </>
    )
}

export default HomeLayout;