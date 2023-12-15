import {
  BoxIcon,
  ChevronFirstIcon,
  ChevronLastIcon,
  DollarSign,
  LayoutDashboard,
  LogInIcon,
  LogOutIcon,
  MoonStarIcon,
  SunIcon,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useTheme } from "@/utils/contexts/theme-provider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SidebarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const navigate = useNavigate();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="font-poppins">
      {/* SIDEBAR */}
      <div
        className={
          isOpen
            ? `h-full px-12 py-6 border-r relative flex flex-col justify-between shadow-md transition-all duration-300`
            : `h-full px-6 py-6 border-r relative flex flex-col justify-start shadow-md transition-all duration-300`
        }
      >
        {/* BUTTON SIDEBAR */}
        <div
          className={
            isOpen
              ? `p-2 bg-[#E4ECF1] dark:bg-[#1265AE] hover:bg-[#1265AE] hover:dark:bg-[#E4ECF1] hover:text-white hover:dark:text-black w-fit h-fit rounded-lg shadow-md cursor-pointer absolute right-4`
              : `p-2 bg-[#E4ECF1] dark:bg-[#1265AE] hover:bg-[#1265AE] hover:dark:bg-[#E4ECF1] hover:text-white hover:dark:text-black w-fit h-fit rounded-lg shadow-md cursor-pointer mb-10`
          }
          onClick={toggle}
        >
          {isOpen ? <ChevronFirstIcon /> : <ChevronLastIcon />}
        </div>

        {/* BUTTON MENU */}
        <div
          className={
            isOpen ? `flex flex-col gap-4` : `flex flex-col gap-4 grow`
          }
        >
          <div className="flex items-center gap-2">
            <div
              className="p-2 bg-[#E4ECF1] dark:bg-[#1265AE] hover:bg-[#1265AE] hover:dark:bg-[#E4ECF1] hover:text-white hover:dark:text-black w-fit h-fit rounded-lg shadow-md cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              <LayoutDashboard />
            </div>
            <p
              className={
                isOpen
                  ? `w-32 font-medium translate-x-0 opacity-100 transition-all cursor-pointer hover:bg-[#E4ECF1] dark:hover:bg-white rounded-md p-2 dark:hover:text-black`
                  : `-translate-x-28 opacity-0 transition-all absolute`
              }
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="p-2 bg-[#E4ECF1] dark:bg-[#1265AE] hover:bg-[#1265AE] hover:dark:bg-[#E4ECF1] hover:text-white hover:dark:text-black w-fit h-fit rounded-lg shadow-md cursor-pointer"
              onClick={() => navigate("/products-admin")}
            >
              <BoxIcon />
            </div>
            <p
              className={
                isOpen
                  ? `w-32 font-medium translate-x-0 opacity-100 transition-all cursor-pointer hover:bg-[#E4ECF1] dark:hover:bg-white rounded-md p-2 dark:hover:text-black`
                  : `-translate-x-28 opacity-0 transition-all absolute`
              }
              onClick={() => navigate("/products-admin")}
            >
              Products
            </p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div
              className="p-2 bg-[#E4ECF1] dark:bg-[#1265AE] hover:bg-[#1265AE] hover:dark:bg-[#E4ECF1] hover:text-white hover:dark:text-black w-fit h-fit rounded-lg shadow-md cursor-pointer"
              onClick={() => navigate("/users-admin")}
            >
              <Users />
            </div>
            <p
              className={
                isOpen
                  ? `w-32 font-medium translate-x-0 opacity-100 transition-all cursor-pointer hover:bg-[#E4ECF1] dark:hover:bg-white rounded-md p-2 dark:hover:text-black`
                  : `-translate-x-28 opacity-0 transition-all absolute`
              }
              onClick={() => navigate("/users-admin")}
            >
              Users
            </p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div
              className="p-2 bg-[#E4ECF1] dark:bg-[#1265AE] hover:bg-[#1265AE] hover:dark:bg-[#E4ECF1] hover:text-white hover:dark:text-black w-fit h-fit rounded-lg shadow-md cursor-pointer"
              onClick={() => navigate("/transactions-admin")}
            >
              <DollarSign />
            </div>
            <p
              className={
                isOpen
                  ? `w-32 font-medium translate-x-0 opacity-100 transition-all cursor-pointer hover:bg-[#E4ECF1] dark:hover:bg-white rounded-md p-2 dark:hover:text-black`
                  : `-translate-x-28 opacity-0 transition-all absolute`
              }
              onClick={() => navigate("/transactions-admin")}
            >
              Transactions
            </p>
          </div>
        </div>

        {/* ADMIN */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p
              className={
                isOpen
                  ? `font-medium w-full opacity-100 translate-x-0 transition-all rounded-md p-2 dark:hover:text-black flex flex-col`
                  : `w-0 opacity-0 -translate-x-28 transition-all absolute`
              }
            >
              <span>John Doe</span>
              <span className="text-xs">johndoe@mail.com</span>
            </p>
          </div>
          <div
            onClick={() => handleTheme()}
            className="flex items-center gap-2 cursor-pointer "
          >
            <div className="p-2 rounded-md shadow-md bg-[#E4ECF1] dark:bg-[#1265AE] hover:bg-[#1265AE] hover:dark:bg-[#E4ECF1] hover:text-white hover:dark:text-black">
              {theme === "light" ? <SunIcon /> : <MoonStarIcon />}
            </div>
            <p
              className={
                isOpen
                  ? `font-medium w-full opacity-100 translate-x-0 transition-all hover:bg-[#E4ECF1] dark:hover:bg-white rounded-md p-2 dark:hover:text-black`
                  : `w-0 opacity-0 -translate-x-28 transition-all absolute`
              }
            >
              Change Theme
            </p>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <div className="p-2 rounded-md shadow-md w-fit bg-[#48B774]">
              <LogInIcon color="white" />
            </div>
            <p
              className={
                isOpen
                  ? `font-medium w-full opacity-100 translate-x-0 transition-all hover:bg-[#E4ECF1] dark:hover:bg-white rounded-md p-2 dark:hover:text-black`
                  : `w-0 opacity-0 -translate-x-28 transition-all absolute`
              }
            >
              Login
            </p>
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            // onClick={() => changeToken()}
          >
            <div className="p-2 rounded-md shadow-md w-fit bg-[#FF5858]">
              <LogOutIcon color="white" />
            </div>

            <p
              className={
                isOpen
                  ? `font-medium w-full opacity-100 translate-x-0 transition-all hover:bg-[#E4ECF1] dark:hover:bg-white rounded-md p-2 dark:hover:text-black`
                  : `w-0 opacity-0 -translate-x-28 transition-all absolute`
              }
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
