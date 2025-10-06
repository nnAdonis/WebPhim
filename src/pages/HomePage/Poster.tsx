import {FaExclamationCircle, FaHeart, FaPlayCircle} from "react-icons/fa";
import {Movie, type MovieType} from "../../lib/Data.ts";
import {useState} from "react";


const Poster = () => {
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(Movie[0]);

    // Sửa: trả về void (không phải Element)
    const handleSelectMovie = (id: number): void => {
        const movie = Movie.find((item: MovieType) => item.id === id);
        setSelectedMovie(movie ?? null);
    };
    return (
        <>
            {selectedMovie && (
                <div key={selectedMovie.id} className="relative min-h-[670px] overflow-hidden">
                    <img src={selectedMovie.urlAnh}
                         className="absolute top-0 left-1/2 -translate-x-1/2
                        w-full h-full object-cover"
                         alt="background"/>
                    <div className="absolute inset-0
                    shadow-[inset_0_0_100px_rgba(0,0,0,0.9),inset_0_0_200px_rgba(0,0,0,0.6)]">
                    </div>
                    <div className={`relative min-h-[670px] flex  ml-7 w-full`}>
                        <div className={`flex flex-1 flex-col justify-center gap-2`}>
                            <div className={` w-125 h-32`}>
                                <img className={`hidden xl:block`} src={selectedMovie.urlTitile} alt=""/>
                            </div>
                            <h1 className={`xl:hidden capitalize text-4xl font-bold`}>{selectedMovie.nameVN}</h1>
                            <div>
                                <h3 className={`text-yellow-300`}>{selectedMovie.nameEN}</h3>
                            </div>
                            <div className={`flex items-center gap-3`}>
                                <button
                                    className={`flex items-center justify-center pt-0.5 pb-0.5 pr-2 pl-2 gap-1 border rounded-sm border-yellow-300`}>
                                    <span className={`text-yellow-300 text-[11px]`}>IMDb</span> {selectedMovie.IMDb}
                                </button>
                                <button
                                    className={`border border-white rounded-sm pt-0.5 pb-0.5 pr-2 pl-2 `}>{selectedMovie.doTuoi}</button>
                            </div>
                            <div className={`flex gap-3`}>
                                {selectedMovie.Jewery?.map((item, i) => (
                                    <a href="#" key={i}
                                       className={`rounded-sm bg-[#1b1a22]/40 pt-0.5 pb-0.5 pr-2 pl-2`}>{item.name}</a>
                                ))}
                            </div>
                            <div className={`hidden lg:block w-160 mt-3 mb-4`}>
                                <p>{selectedMovie.moTa}</p>
                            </div>
                            <div className={`flex justify-between items-center`}>
                                <div className={`flex justify-between items-center gap-10`}>
                                    <a href={selectedMovie.urlMovie}><FaPlayCircle
                                        className={`text-[#ffd875] rounded-[50%] text-[68px] transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(255,215,0,0.7)]`}/></a>
                                    <div
                                        className={`flex items-center border-2 border-white/30 hover:border-white hover:border-2 rounded-full px-3  gap-3 `}>
                                        <FaHeart className={` hover:text-yellow-300  py-2.5  text-[40px]`}/>
                                        <div className="w-0.5 h-12  bg-white/30"></div>
                                        <FaExclamationCircle className={` hover:text-yellow-300 py-2.5 text-[40px]`}/>
                                    </div>
                                </div>
                                <div className={`flex justify-center items-center gap-3 mr-30`}>
                                    {Movie.map((movie) => (
                                        <div onClick={() => handleSelectMovie(movie.id)} key={movie.id}>
                                            <img
                                                className={`w-20 h-13 rounded-lg border border-gray-700 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:ring-2 hover:ring-white`}
                                                src={movie.urlAnh} alt=""/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Poster;