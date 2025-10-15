import {HiChevronRight} from "react-icons/hi";
import CardMovie from "../../components/CardMovie.tsx";

const History = () =>{
    return (
        <>
            <div className={`mt-10 px-7`}>
                <div className={`flex justify-between lg:justify-start items-center mt-4 mb-7 gap-7`}>
                    <h2 className={`font-bold text-[24px] md:text-[32px]`}>Xem tiếp của bạn</h2>
                    <a href={`#`} className={`border p-1 border-white rounded-full flex items-center hover:text-yellow-300 hover:border-yellow-300 hover:px-8 transition-transform duration-300 `}>
                        <HiChevronRight size={20} />
                    </a>
                </div>
                <CardMovie/>
            </div>
        </>
    )
}

export default History;