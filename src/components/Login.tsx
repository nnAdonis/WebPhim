import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "./ui/dialog.tsx";
import {Button} from "./ui/button.tsx";
import {FaUserAlt} from "react-icons/fa";
import {Input} from "./ui/input.tsx";

const Login = () => {
    return (
        <Dialog>
            <DialogTrigger asChild className={`outline-none`}>
                <Button variant={`outline`}
                        className={`p-6 bg-white text-zinc-900 hover:bg-gray-500  hover:text-white rounded-full w-full xl:w-auto`}>
                    <FaUserAlt/>Thành Viên
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[60vh] p-0 overflow-hidden border-none bg-[#1e2545] rounded-2xl text-white">
                <div className="flex">
                    {/* --- BÊN TRÁI: HÌNH NỀN --- */}
                    <div className="hidden md:flex w-1/2 bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                "url('https://www.rophim.li/images/rophim-login.jpg')",
                        }}>
                    </div>
                    {/* --- BÊN PHẢI: FORM --- */}
                    <div className="w-full md:w-1/2  p-8 flex justify-center flex-col">
                        <DialogHeader>
                            <DialogTitle className="text-2xl mb-1">Đăng nhập</DialogTitle>
                            <p className="text-gray-400 text-sm">
                                Nếu bạn chưa có tài khoản,{" "}
                                <span className="text-yellow-400 hover:underline cursor-pointer">
                                    đăng ký ngay
                                </span>
                            </p>
                        </DialogHeader>
                        <form className="mt-6 space-y-4">
                            <Input placeholder="Email" className="bg-[#1e2545] border-gray-400 text-white placeholder-gray-400" />
                            <Input placeholder="Mật khẩu" type="password" className="bg-[#1e2545] border-gray-400 text-white placeholder-gray-400" />

                            {/* CAPTCHA giả lập */}
                            <div className="bg-[#232323] p-3 border border-white flex items-center gap-2">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-sm">✓</div>
                                <span>Thành công!</span>
                            </div>

                            <Button className="w-full bg-[#ffd875] hover:bg-yellow-500 text-black font-semibold">
                                Đăng nhập
                            </Button>

                            <p className="text-center text-sm text-gray-300 hover:text-yellow-400 cursor-pointer">
                                Quên mật khẩu?
                            </p>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Login;