import {MdNavigateNext} from "react-icons/md";
import CardMovieHorizontal from "../../components/CardMovieHorizontal.tsx";

const TopicsList = ()=>{
    return(
        <>
            <div className={`rounded-2xl bg-gradient-to-b from-[#222432] to-[#191b24] min-h-screen mx-4 py-16 pl-16 pr-4`}>
                <div className={`flex flex-col gap-10`}>
                    <div className={`xl:flex `}>
                        <div className={`flex  gap-4 justify-between xl:flex-col xl:justify-center xl:max-w-60 mb-3 xl:mb-0`}>
                            <div className={`text-[30px] font-bold bg-[linear-gradient(235deg,_#c9b6f2,_#e6dbff)] bg-clip-text capitalize text-transparent`}>
                                Phim hàn quốc mới
                            </div>
                            <a className={`flex items-center font-medium text-[16px] hover:text-yellow-300`}>
                                Xem toàn bộ <MdNavigateNext />
                            </a>
                        </div>
                        <CardMovieHorizontal/>
                    </div>
                    <div className={`xl:flex `}>
                        <div className={`flex  gap-4 justify-between xl:flex-col xl:justify-center xl:max-w-60 mb-3 xl:mb-0`}>
                            <div className={`text-[30px] font-bold bg-[linear-gradient(235deg,_#c9b6f2,_#e6dbff)] bg-clip-text capitalize text-transparent`}>
                                Phim hàn quốc mới
                            </div>
                            <a className={`flex items-center font-medium text-[16px] hover:text-yellow-300`}>
                                Xem toàn bộ <MdNavigateNext />
                            </a>
                        </div>
                        <CardMovieHorizontal/>
                    </div>
                    <div className={`xl:flex `}>
                        <div className={`flex  gap-4 justify-between xl:flex-col xl:justify-center xl:max-w-60 mb-3 xl:mb-0`}>
                            <div className={`text-[30px] font-bold bg-[linear-gradient(235deg,_#c9b6f2,_#e6dbff)] bg-clip-text capitalize text-transparent`}>
                                Phim hàn quốc mới
                            </div>
                            <a className={`flex items-center font-medium text-[16px] hover:text-yellow-300`}>
                                Xem toàn bộ <MdNavigateNext />
                            </a>
                        </div>
                        <CardMovieHorizontal/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TopicsList;