import {Facebook, Github, Instagram, Twitter, Youtube} from "lucide-react";

const FooterHome = () => {
    const arrayIcon = [Twitter, Github, Instagram, Facebook, Youtube];
    const arrayLH = ['Hỏi đáp','Chính sách bảo mật', 'điều kiện sử dụng','Giới thiệu','liên hệ'];
    const arrayWeb = ['Dongphim','Gienphim','motphim','subnhanh'];
  return (
      <>
          <footer className="bg-[#0f111a]">
              <div className={`flex flex-col justify-center items-center xl:justify-normal xl:items-baseline gap-8 pt-12 pb-12 pl-5 pr-5 xl:w-[50%]`}>
                  <div className={`flex bg-[#72170f] w-90 p-2 rounded-3xl items-center`}>
                      <img className={`w-7 h-7`} src="https://www.rophim.mx/images/vn_flag.svg" alt="vietnam"/>
                      <p className={`ml-4`}>Hoàng Sa & Trường Sa là của Việt Nam!</p>
                  </div>
                  <div className={`flex flex-col items-center sm:flex-row sm:justify-normal sm:items gap-16`}>
                      <img className={`w-50 h-20`} src="https://www.rophim.mx/images/logo.svg" alt="logo"/>
                      <div className={`flex items-center gap-8 border-l-0 sm:border-l border-white sm:pl-16 `}>
                          {
                              arrayIcon.map((Icon,i) => (
                                  <Icon
                                      key = {i}
                                      size={40}
                                      className={`bg-[var(--background-color-index)] p-2 rounded-full `} />
                              ))
                          }
                      </div>
                  </div>
                  <div className={`flex gap-12`}>
                      {
                          arrayLH.map((value,i) => (
                              <a href='#' className={`capitalize`} key = {i}>{value}</a>
                          ))
                      }
                  </div>
                  <div className={`flex gap-12`}>
                      {
                          arrayWeb.map((value,i) => (
                              <a href='#' className={`capitalize`} key = {i}>{value}</a>
                          ))
                      }
                  </div>
                  <div>
                        <p className={`lg:text-left text-center`}>
                            RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao miễn phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới khổng lồ, phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa dạng thể loại. Khám phá nền tảng phim trực tuyến hay nhất 2024 chất lượng 4K!
                        </p>
                  </div>
                  <div>
                      <a href="#">© 2024 RoPhim</a>
                  </div>
              </div>
          </footer>
      </>
  )
}

export default FooterHome