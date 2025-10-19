import { FaRectangleXmark } from "react-icons/fa6";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const movies = [
    { id: 1, title: "Nhiệm Vụ Bất Khả Thi", img: "https://static.nutscdn.com/vimg/300-0/5a234fecdaa333c3ca0bf4487cf0c977.jpg" },
    { id: 2, title: "Siêu Nhí Karate", img: "https://static.nutscdn.com/vimg/300-0/ebff6b469acdd773f3a4d441a49c4aa9.jpg" },
    { id: 3, title: "Conan Halloween", img: "https://static.nutscdn.com/vimg/300-0/d1b7ccc45c39a2c8e06791b00090db55.jpg" },
    { id: 4, title: "Phong Thần 2", img: "https://static.nutscdn.com/vimg/300-0/2335f236867192e9e7e3167c858c50b6.jpg" },
    { id: 5, title: "Phong Thần Đệ Nhất Bộ", img: "https://static.nutscdn.com/vimg/300-0/d0f979ab72160593e538fcc702b7e749.jpg" },
    { id: 6, title: "Na Tra: Ma Đồng", img: "https://static.nutscdn.com/vimg/300-0/279db8d7454375f7ebd64843951882fe.jpg" },
    { id: 7, title: "Conan: Hắc Ám", img: "https://static.nutscdn.com/vimg/300-0/955bb963617ffe081ecc2853f3df0f62.jpg" },
    { id: 7, title: "Conan: Hắc Ám", img: "https://static.nutscdn.com/vimg/300-0/955bb963617ffe081ecc2853f3df0f62.jpg" },
    { id: 7, title: "Conan: Hắc Ám", img: "https://static.nutscdn.com/vimg/300-0/955bb963617ffe081ecc2853f3df0f62.jpg" },
];

const CardMovie = () => {
    // 🧠 Khai báo kiểu đúng cho ref
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const progress = 60;

    // 🧩 Hàm scroll có kiểu direction rõ ràng
    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container || !container.firstChild) return;

        const card = container.firstChild as HTMLElement;
        const cardWidth = card.offsetWidth + 16; // 16 = gap-4

        container.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative max-w-[1860px] mx-auto">
            {/* Nút trái */}
            <button
                onClick={() => scroll("left")}
                className="absolute button_hidden left-[-60px] top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black transition z-10"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Danh sách phim */}
            <div ref={scrollRef} className="flex overflow-x-auto scrollbar-none scroll-smooth ">
                {movies.map((movie) => (
                    <div key={movie.id} className=" group flex flex-col gap-4 p-4 hover:bg-[#3f3f3f] rounded-lg  transition-all duration-1000">
                        <div className="relative min-w-52 2xl:min-w-68 rounded-lg group-hover:rounded-none group-hover:scale-102 transition-all duration-1000 overflow-hidden mb-3 max-h-110">
                            <a href="#">
                                <img className="w-full h-full object-cover" src={movie.img} alt={movie.title} />
                            </a>
                            <a href="#">
                                <FaRectangleXmark className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center" />
                            </a>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="w-[90%] bg-gray-300 h-2 rounded-full">
                                <span className="bg-blue-500 h-2 transition-all duration-300" style={{ width: `${progress}%` }}></span>
                            </div>
                            <div className="flex justify-center items-center text-gray-400">
                                <p>P.2 </p>
                                <div className="w-1 h-1 bg-[#aaa] mx-2"></div>
                                <p>Tập 11</p>
                                <div className="w-1 h-1 bg-[#aaa] mx-2"></div>
                                <div className="flex justify-center items-center">
                                    <p>23m</p>
                                    <span className="ml-1 text-gray-500">/ 24m</span>
                                </div>
                            </div>
                            <div className="text-[15px]">
                                <p>{movie.title}</p>
                            </div>
                            <div className="text-gray-400">
                                <p>Kaiju #8</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Nút phải */}
            <button
                onClick={() => scroll("right")}
                className="absolute button_hidden right-[-60px] top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black transition z-10"
            >
                <ChevronRight size={28} />
            </button>
        </div>
    );
};

export default CardMovie;
