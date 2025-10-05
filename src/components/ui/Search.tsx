import {Search} from "lucide-react";
import {useEffect, useState} from "react";


const SearchItem = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return(
      <div className="flex items-center justify-center">
          <div className="relative left-8"><Search size={16} strokeWidth={3}/></div>
          <input className={`xl:h-10 h-13 w-full rounded-sm pt-2 pr-10 pb-2 pl-10 ${isSticky ? "bg-[#22242c]": "bg-[#22242c]/30"}`} type="text" placeholder= " Tìm kiếm phim, diễn viên" />
      </div>
  )
}

export default SearchItem;