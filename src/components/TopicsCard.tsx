import {FaAngleRight} from "react-icons/fa";
import {ListTopics, type TopicsType} from "../lib/Data.ts";

function getTop5Topics(topics: TopicsType[]): TopicsType[] {
    return topics
        .sort((a, b) => {
            if (b.visits !== a.visits) return b.visits - a.visits;
            return b.favourite - a.favourite;
        })
        .slice(0, 6);
}

const colors = ["bg-pink-500","bg-blue-500","bg-green-500","bg-purple-500","bg-yellow-500","bg-red-300"];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

const TopicsCard = () => {
    const top5 = getTop5Topics(ListTopics);
    const remainingCount = ListTopics.length - top5.length;
    return (
        <>
            <div className={` flex overflow-x-auto sm:overflow-visible scrollbar-none mt-4 sm:grid sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4`}>
                {top5.map(topic => (
                    <a key={topic.id} href={topic.url}
                       className={`flex justify-center flex-col ${getRandomColor()} min-w-36 h-22 sm:aspect-[16/9] sm:h-auto p-5 rounded-lg shadow-sm  transform transition duration-300 sm:hover:-translate-y-2 sm:hover:shadow-xl `}>
                        <div className={`flex flex-col justify-center`}>
                            <h3 className={`font-bold sm:text-[19px] xl:text-[22px] text-[14px]`}>{topic.nameEN}</h3>
                            <div className={`hidden md:flex items-center gap-1 mt-2`}>
                                <p className={`font-medium`}>Xem chủ đề </p>
                                <FaAngleRight/>
                            </div>
                        </div>
                    </a>
                ))}
                {remainingCount > 0 && (
                    <a
                        href="/topics"
                        className="flex items-center justify-center bg-gray-600 min-w-36 h-20 sm:aspect-[16/9] sm:h-auto  rounded-lg shadow-sm
                     transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <h3 className="font-bold text-xl text-white">+{remainingCount} chủ đề</h3>
                    </a>
                )}
            </div>
        </>
    )
}

export default TopicsCard;