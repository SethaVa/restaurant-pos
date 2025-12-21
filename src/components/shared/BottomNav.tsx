import React from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";

const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-bg-footer)] p-2 h-16 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className={`
            flex items-center justify-center w-[200px]
            ${
              isActive("/")
                ? "text-[var(--color-whitesmoke)] bg-[var(--color-dark)] rounded-[15px]"
                : "text-[var(--color-secondary)]"
            }
        `}
      >
        <FaHome className="inline mr-2" size={20} />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className={`
            flex items-center justify-center w-[200px]
            ${
              isActive("/orders")
                ? "text-[var(--color-whitesmoke)] bg-[var(--color-dark)] rounded-[15px]"
                : "text-[var(--color-secondary)]"
            }
        `}
      >
        <MdOutlineReorder className="inline mr-2" size={20} />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className={`
            flex items-center justify-center w-[200px]
            ${
              isActive("/tables")
                ? "text-[var(--color-whitesmoke)] bg-[var(--color-dark)] rounded-[15px]"
                : "text-[var(--color-secondary)]"
            }
        `}
      >
        <MdTableBar className="inline mr-2" size={20} />
        <p>Tables</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <CiCircleMore className="inline mr-2" size={20} />
        <p>More</p>
      </button>

      <button className="absolute text-[var(--color-primary)] bg-[#F6B100] rounded-full p-3 items-center bottom-6">
        <BiSolidDish />
      </button>
    </div>
  );
};

export default BottomNav;
