// @ts-ignore
import SearchInput from "../../components/ui/Search";
import {Dropdown, DropdownNation, DropdownNotifi, DropdownProfile} from "../../components/ui/Dropdown.tsx";
import {useEffect, useState} from "react";
import {Bell, MonitorDown, Search, X} from "lucide-react";
import Login from "../../components/Login.tsx";


const HeaderHome = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const arrayMenu = ['chủ đề', <Dropdown/>, 'phim lẻ', 'phim bộ', 'xem chung', <DropdownNation/>, 'diễn viên', 'lịch chiếu', 'Rổ bóng'];

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
    return (
      <>
          <header  className={`w-full z-50 flex justify-between items-center transition-all duration-500 h-18 ${isSticky ? "fixed top-0 bg-[#0f111a] shadow-md" : "absolute top-0 bg-transparent"}`}>
              {showSearch ? (
                  <div className={`flex w-full justify-center items-center`}>
                      <div className={`w-[96.5%] `}>
                          <SearchInput/>
                      </div>
                      <button onClick={() => setShowSearch(false)}>
                          <X strokeWidth={3} size={30} className={`ml-3 text-red-500 mr-3`}/>
                      </button>
                  </div>
              ) : (
                  <div className={`flex justify-between items-center transition-all duration-300 w-full  p-2`}>
                      <div className={`flex gap-4  items-center`}>
                          <div className={`flex items-center w-auto gap-3`}>
                              <div className={`flex items-center gap-4`}>
                                  <div className={`xl:hidden`}>
                                      <DropdownProfile/>
                                  </div>
                                  <img className="h-12 sm:ml-8 xl:ml-3 2xl:ml-5 w-auto " src="https://www.rophim.mx/images/logo.svg" alt="logo"/>
                              </div>
                              <div className="hidden xl:block 2xl:w-full w-52 m-3">
                                  <SearchInput/>
                              </div>
                          </div>
                          <div className=" 2xl:w-auto 2xl:gap-7 justify-center gap-4.5 hidden xl:flex ">
                              {
                                  arrayMenu.map((item, i) => (
                                      <a className={'hover:text-yellow-300 capitalize hover:scale-110 hover:font-medium transition-[transform] duration-300 outline-none'} key={i}>{i === arrayMenu.length-1 ?(
                                          <>
                                              <span className="text-black bg-[#ffd875] rounded-sm pl-1 pr-1 mr-2 ml-2">new</span>{item}
                                          </>
                                      ) : item}</a>
                                  ))
                              }
                          </div>
                      </div>
                      <div className={`flex gap-15 mr-3 xl:hidden` }>
                          <Bell strokeWidth={3} />
                          <button onClick={() => setShowSearch(true)}>
                              <Search strokeWidth={3}/>
                          </button>
                      </div>
                      <div className={`xl:flex hidden items-center gap-5 2xl:gap-7`}>
                          <a href={`#`} className={`flex items-center justify-center gap-4`}>
                              <MonitorDown size={32} />
                              <div>
                                  <p className={`text-[11px]`}>Tải ứng dụng</p>
                                  <p className={`font-bold`}>RoPhim</p>
                              </div>
                          </a>
                          {/*ki chưa đăng nhập*/}
                          <Login/>
                          {/*khi đã đăng nhập*/}
                          <div className={`hidden items-center justify-center gap-5`}>
                              <DropdownNotifi/>
                              <DropdownProfile/>
                          </div>
                      </div>
                  </div>
              )
              }
          </header>
      </>
  )
}

export default HeaderHome;