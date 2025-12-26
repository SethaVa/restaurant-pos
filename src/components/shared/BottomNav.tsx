import React, { useState } from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import Modal from "./Modal";

const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const isActive = (path: string) => pathname === path;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [guestNumber, setGuestNumber] = useState(0);
  const increase = () => {
    if (guestNumber >= 6) return;
    setGuestNumber((prev) => prev + 1);
  };
  const decrease = () => {
    if (guestNumber == 0) return;
    setGuestNumber((prev) => prev - 1);
  };

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

      <button
        className="absolute text-[var(--color-primary)] bg-[#F6B100] rounded-full p-3 items-center bottom-6"
        onClick={openModal}
      >
        <BiSolidDish />
      </button>

      <Modal title="Create Order" isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <label className="block text-[var(--color-secondary)] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[var(--color-background)]">
            <input
              type="text"
              name=""
              placeholder="Enter customer name"
              id=""
              className="bg-transparent flex-1 text-white focus:outline-none"
            ></input>
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-[var(--color-secondary)] mb-2 text-sm font-medium">
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[var(--color-background)]">
            <input
              type="number"
              name=""
              placeholder="Enter customer phone"
              id=""
              className="bg-transparent flex-1 text-white focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            ></input>
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-[var(--color-secondary)] mb-2 text-sm font-medium">
            Guest
          </label>
          <div className="flex items-center justify-between bg-[var(--color-background)] px-4 py-3 rounded-lg">
            <button className="text-yellow-500 text-2xl" onClick={decrease}>
              &minus;
            </button>
            <span className="text-white">
              {guestNumber} {guestNumber > 1 ? "People" : "Person"}
            </span>
            <button className="text-yellow-500 text-2xl" onClick={increase}>
              &#43;
            </button>
          </div>
        </div>
        <button
          className="w-full bg-[var(--color-currency)] text-[var(--color-whitesmoke)] rounded-lg py-3 mt-8 hover:bg-yellow-700"
          onClick={() => navigate("/tables")}
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
