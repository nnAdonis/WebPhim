import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Movie {
    id: number;
    title: string;
    img: string;
}

const movies: Movie[] = [
    { id: 1, title: "Nhiệm Vụ Bất Khả Thi", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
    { id: 2, title: "Siêu Nhí Karate", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
    { id: 3, title: "Conan Halloween", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
    { id: 4, title: "Phong Thần 2", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
    { id: 5, title: "Phong Thần Đệ Nhất Bộ", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
    { id: 6, title: "Na Tra: Ma Đồng", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
    { id: 7, title: "Conan: Hắc Ám", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
    { id: 8, title: "Conan: Hắc Ám 2", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
    { id: 9, title: "Conan: Hắc Ám 3", img: "https://static.nutscdn.com/vimg/400-0/42fcc495ca7069f4b58bc19fd5ba2760.jpg" },
];

const CardMovieHorizontal: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const handleScroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;

        const card = container.querySelector<HTMLDivElement>(".movie-card");
        const cardWidth = (card?.offsetWidth ?? 300) + 16; // tính luôn gap-4 (16px)
        const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

        container.scrollBy({ left: scrollAmount, behavior: "smooth" });

        // Cập nhật trạng thái nút sau khi scroll
        setTimeout(() => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            setShowLeft(container.scrollLeft > 10);
            setShowRight(container.scrollLeft + 10 < maxScrollLeft);
        }, 300);
    };

    return (
        <div className="relative w-full">
            {/* Nút trái */}
            {showLeft && (
                <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-0 top-35 -translate-y-1/2 z-10 bg-white hover:bg-white/70 text-black rounded-full w-12 h-12 flex items-center justify-center transition"
                >
                    <ChevronLeft size={22} />
                </button>
            )}

            {/* Container phim */}
            <div
                ref={scrollRef}
                className="overflow-x-hidden flex flex-nowrap gap-4 pr-4 xl:pl-4 scroll-smooth"
            >
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card flex-shrink-0 max-w-117">
                        <a href="#" className="relative block">
                            <img
                                src={movie.img}
                                alt={movie.title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            <div className="absolute flex bottom-0 left-6">
                                <div className="text-white bg-gray-600 rounded-tl-md py-1 px-2 text-sm">
                                    PĐ. 10
                                </div>
                                <div className="text-white bg-green-600 rounded-tr-md py-1 px-2 text-sm">
                                    TM. 8
                                </div>
                            </div>
                        </a>
                        <div className="mt-2 ml-6 text-lg font-semibold text-white">{movie.title}</div>
                        <div className="text-sm ml-6 text-gray-400">conan</div>
                    </div>
                ))}
            </div>

            {/* Nút phải */}
            {showRight && (
                <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-0 top-35 -translate-y-1/2 z-10 bg-white hover:bg-white/70 text-black rounded-full w-12 h-12 flex items-center justify-center transition"
                >
                    <ChevronRight size={22} />
                </button>
            )}
        </div>
    );
};

export default CardMovieHorizontal;
