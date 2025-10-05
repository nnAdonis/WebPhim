import {FaExclamationCircle, FaHeart, FaPlayCircle} from "react-icons/fa";


const Poster = () => {

    return(
        <>
            <div className="relative min-h-[670px] overflow-hidden">
                <img src="https://static.nutscdn.com/vimg/1920-0/25574669045d5ac3f307f95c03fa8041.jpg"
                     className="absolute top-0 left-1/2 -translate-x-1/2
                        w-full h-full object-cover"
                     alt="background"/>
                <div className="absolute inset-0
                    shadow-[inset_0_0_100px_rgba(0,0,0,0.9),inset_0_0_200px_rgba(0,0,0,0.6)]">
                </div>
                <div className={`relative min-h-[670px] flex  ml-7 w-full`}>
                    <div className={`flex flex-1 flex-col justify-center gap-2`}>
                        <div className={` w-125 h-32`}>
                            <img className={`hidden xl:block`} src="https://static.nutscdn.com/vimg/0-260/bcf63b1d38066aa554637c5bb05405e5.png" alt=""/>
                        </div>
                        <h1 className={`xl:hidden capitalize text-4xl font-bold`}>Thế giới không lối thoát</h1>
                        <div>
                            <h3 className={`text-yellow-300`}>Alice in Borderland</h3>
                        </div>
                        <div className={`flex items-center gap-3`}>
                            <a href="#" className={`flex items-center justify-center pt-0.5 pb-0.5 pr-2 pl-2 gap-1 border rounded-sm border-yellow-300`} >
                                <span className={`text-yellow-300 text-[11px]`}>IMDb</span> 7.8
                            </a>
                            <a href="#" className={`border border-white rounded-sm pt-0.5 pb-0.5 pr-2 pl-2 `} >T18</a>
                        </div>
                        <div className={`flex gap-3`}>
                            <a href="#" className={`rounded-sm bg-[#1b1a22]/40 pt-0.5 pb-0.5 pr-2 pl-2`}>Chính Kịch</a>
                        </div>
                        <div className={`hidden lg:block w-160 mt-3 mb-4`}>
                            <p>Một game thủ lông bông cùng hai người bạn thân ra họ đã lọt vào thế giới Tokio song song nơi họ buộc phải thi đấu trong một loạt trò chơi tàn bạo để tồn tại</p>
                        </div>
                        <div className={`flex justify-between items-center`}>
                            <div className={`flex justify-between items-center gap-10`}>
                                <a href="" ><FaPlayCircle className={`text-[#ffd875] rounded-[50%] text-[68px] transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(255,215,0,0.7)]`}/></a>
                                <div className={`flex items-center border-2 border-white/30 hover:border-white hover:border-2 rounded-full px-3  gap-3 `}>
                                    <FaHeart className={` hover:text-yellow-300  py-2.5  text-[40px]`}/>
                                    <div className="w-0.5 h-12  bg-white/30"></div>
                                    <FaExclamationCircle className={` hover:text-yellow-300 py-2.5 text-[40px]`} />
                                </div>
                            </div>
                            <div className={`flex justify-center items-center gap-3 mr-30`}>
                                <img className={`w-20 h-13 rounded-lg border border-gray-700 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:ring-2 hover:ring-white`} src="https://static.nutscdn.com/vimg/1920-0/25574669045d5ac3f307f95c03fa8041.jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Poster