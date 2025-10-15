import TopicsCard from "../../components/TopicsCard.tsx";

const Topics = () =>{
    return (
        <>
            <div className={`mt-7 px-7`}>
                <h2 className={`font-bold text-[24px] md:text-[32px] `}>Bạn đang quan tâm gì?</h2>
                <TopicsCard/>
            </div>
        </>
    )
}

export default Topics;