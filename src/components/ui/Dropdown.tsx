import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "./dropdown-menu.tsx"
import {
    Bell,
    CheckCheck,
    ChevronDown,
    ChevronsUp,
    CirclePoundSterling,
    Heart, LogIn, LogOut,
    Mars, Menu, MonitorDown,
    Plus, RotateCcw, UserRound,
    Venus,
    Wallet, X
} from "lucide-react";
import Avata from "../Avata.tsx";
import {useState} from "react";
import {ArrayJewery, ArrayNation} from "../../lib/Data.ts";
import Login from "../Login.tsx";

const Dropdown = () => {

  return(
      <>
          <DropdownMenu>
              <DropdownMenuTrigger>
                  <button className={'flex items-center'}>
                      Thể loại <ChevronDown className='w-5 h-5' />
                  </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='relative top-2 left-50 grid grid-cols-4 !text-white !bg-[#1b1a22]/80  border-none w-120'>
                  {
                      ArrayJewery.map((jewery) =>(
                          <DropdownMenuItem key={jewery.id} className='!bg-[#1b1a22]/10 p-0 w-full' >
                              <a href={jewery.url} className='hover:text-yellow-300 capitalize hover:bg-[#22242c] rounded-sm  pt-2 pr-4 pl-4 pb-2 w-full'>
                                  {jewery.name}
                              </a>
                          </DropdownMenuItem>
                      ))
                  }
              </DropdownMenuContent>
          </DropdownMenu>
      </>
  )
}

const DropdownNation = () => {


    return(
        <>
            <DropdownMenu>
                <DropdownMenuTrigger >
                    <button className={'flex'}>
                        Quốc gia <ChevronDown className='w-5 h-5'/>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='relative top-2 left-4.5 flex flex-col justify-center items-start !text-white !bg-[#1b1a22]/90  border-none'>
                    {
                        ArrayNation.map((nation) =>(
                            <DropdownMenuItem key={nation.id} className='!bg-[#1b1a22]/10 p-0 w-full' >
                                <a href={nation.url} className='hover:text-yellow-300 capitalize hover:bg-[#22242c] rounded-sm  pt-2 pr-4 pl-4 pb-2 w-full'>
                                    {nation.name}
                                </a>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

const DropdownNotifi = ()=>{
    const arrayNotifi: string[] = []; // luôn rỗng
    return(
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className={`rounded-4xl`}>
                    <button className={`rounded-4xl border-solid border-white border p-2`}>
                        <Bell  />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`mr-30 mt-4 bg-[#282c43] text-white border-none `}>
                    <div className={`flex justify-between`}>
                        <div className={`flex`}>
                            <DropdownMenuItem className={`text-yellow-300 focus:bg-transparent focus:text-yellow-300 `}>Phim</DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-transparent focus:text-white">Cộng đồng</DropdownMenuItem>
                        </div>
                        <DropdownMenuItem className="focus:bg-transparent focus:text-white" ><CheckCheck className={`text-white`}/> Đã đọc</DropdownMenuItem>
                    </div>
                    <DropdownMenuSeparator />
                    <div className={`flex justify-center items-center min-h-25 min-w-80`}>
                        {arrayNotifi.length === 0 ? (
                            <span className={`text-gray-400`}>Không có thông báo nào</span>
                        ):(
                            <ul className="w-full space-y-2">
                                {arrayNotifi.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="p-2 rounded bg-gray-700 hover:bg-gray-600 transition"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <DropdownMenuSeparator />
                    <div className={`flex justify-center hover:text-yellow-300`}>
                        <DropdownMenuItem className="focus:bg-transparent focus:text-white">Xem toàn bộ</DropdownMenuItem>
                    </div>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

const DropdownProfile = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
    const arrayMenu = ['chủ đề', <Dropdown/>, 'phim lẻ', 'phim bộ', 'xem chung', <DropdownNation/>, 'diễn viên', 'lịch chiếu', 'Rổ bóng'];
    return (
        <>
            <DropdownMenu onOpenChange={toggleMenu} >
                <DropdownMenuTrigger className={`xl:rounded-4xl`} >
                    <button className={`hidden xl:flex xl:items-center xl:mr-2 2xl:mr-3`}>
                        <Avata/>
                        <ChevronDown className='w-5 h-5 ml-2' />
                    </button>
                    {
                        isOpen ? <X strokeWidth={3} className={`xl:hidden ml-3 text-red-500`}/> : <Menu strokeWidth={3} className={`xl:hidden ml-3`}/>
                    }
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`xl:mt-1 mt-3 xl:mr-10 ml-1 xl:w-52 w-100 xl:bg-[#282c43] bg-[#323c6d] p-0 text-white border-none`}>
                    <DropdownMenuGroup className={`hidden`}>

                        <div className={`xl:ml-3 ml-8 mb-3 flex gap-2.5 flex-col mt-3 mr-6 xl:mr-3`}>
                            <div className={`flex justify-between`}>
                                <div className={`flex gap-2.5 flex-col w-70 xl:w-auto`}>
                                    <div className={`flex`}>
                                        <p className={`text-3`}>Nagis </p>
                                        <Venus size={20} className={`ml-2`}/><Mars className={`hidden ml-2`} />
                                    </div>
                                    <p className={`text-[11px] text-gray-400`}>Nâng cấp tài khoản RoX để có trải nghiệm đẳng cấp hơn.</p>
                                </div>
                                <div className={`xl:hidden`}>
                                    <Avata/>
                                </div>
                            </div>
                            <DropdownMenuItem className={`focus:bg-[#ffd875] bg-[#ffd875] focus:text-black text-black flex justify-center`}>Nâng cấp ngay <ChevronsUp /> </DropdownMenuItem>
                        </div>
                        <DropdownMenuSeparator className={`hidden xl:block`}/>
                        <div className={`flex justify-between ml-8 xl:ml-2 mt-4 mb-4 mr-6 xl:mr-3`}>
                            <div className={`flex justify-center items-center gap-1`}>
                                <Wallet size={15}/>
                                <p>Số dư</p>
                            </div>
                            <div className={`flex justify-center items-center text text-3 gap-1 `}>
                                <p className={`text-yellow-300`}>0</p>
                                <CirclePoundSterling size={16} className={`text-yellow-300`} />
                                <DropdownMenuItem className={`bg-white text-black text-[11px] m-0 pl-1 pr-1 h-4.5 rounded-xl `}>
                                    + Nạp
                                </DropdownMenuItem>
                            </div>
                        </div>
                        <DropdownMenuSeparator className={`hidden xl:block`}/>
                        <div className={`xl:flex xl:flex-col grid grid-cols-2 gap-3 mt-2 mb-2 ml-8 mr-6 xl:ml-0 xl:mr-0 xl:pb-0 pb-5`}>
                            <DropdownMenuItem className={`focus:bg-gray-700 focus:text-white border border-gray-500 xl:border-0`} >
                                <Heart size={16} className={`text-white`}/>
                                Yêu thích
                            </DropdownMenuItem>
                            <DropdownMenuItem className={`focus:bg-gray-700 focus:text-white border border-gray-500 xl:border-0`} >
                                <Plus size={16} strokeWidth={2.25} className={`text-white`}/>
                                Danh sách
                            </DropdownMenuItem>
                            <DropdownMenuItem className={`focus:bg-gray-700 focus:text-white border border-gray-500 xl:border-0`} >
                                <UserRound size={16} strokeWidth={2.25} className={`text-white`}/>
                                Xem tiếp
                            </DropdownMenuItem>
                            <DropdownMenuItem className={`focus:bg-gray-700 focus:text-white border border-gray-500 xl:border-0`} >
                                <RotateCcw size={16} strokeWidth={2.25} className={`text-white`}/>
                                Tài Khoản
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className={`hidden xl:block`}/>
                            <DropdownMenuItem className={`focus:bg-gray-700 focus:text-white xl:mb-1 border border-gray-500 xl:border-0`} >
                                    <LogOut size={16} strokeWidth={2.25} className={`text-white`}/>
                                    Đăng xuất
                            </DropdownMenuItem>
                            <LogIn size={16} strokeWidth={2.25} className={`hidden`}/>
                        </div>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup className={`pb-4 pt-4 pl-2 pr-6`}>
                        <div className={`xl:hidden ml-2`}>
                            <Login/>
                        </div>
                    </DropdownMenuGroup>
                    <DropdownMenuGroup className={'xl:hidden bg-[#3f4b88] pb-6 pt-6'}>
                        <DropdownMenuItem className={`bg-[#4c5790] ml-4 mr-6 transition-all duration-300`}>
                            <a href={`#`} className={`flex items-center justify-center gap-4`}>
                                <MonitorDown className={`text-yellow-300`}/>
                                <div>
                                    <p className={`text-[11px]`}>Tải ứng dụng</p>
                                    <p className={`font-bold`}>RoPhim</p>
                                </div>
                            </a>
                        </DropdownMenuItem>
                        <div className={`grid grid-cols-2 gap-5 ml-4 mt-6`}>
                            {
                                arrayMenu.map((item, i) => (
                                    <a className={'hover:text-yellow-300 capitalize'} key={i}>{i === arrayMenu.length-1 ?(
                                        <>
                                            <span className="text-black bg-[#ffd875] rounded-sm pl-1 pr-1 mr-2">new</span>{item}
                                        </>
                                    ) : item}</a>
                                ))
                            }
                        </div>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}


export {
    Dropdown,
    DropdownNation,
    DropdownNotifi,
    DropdownProfile
};