import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import { useAppSelector } from "../redux/hooks";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import BillInfo from "../components/menu/BillInfo";

const Menu = () => {
  const customer = useAppSelector((state) => state.customer);
  return (
    <section className="bg-[var(--color-background)] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Div */}
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[var(--color-primary)] text-2xl font-bold tracking-wide">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <MdRestaurantMenu className="text-[var(--color-primary)] text-4xl" />
              <div className="text-md items-start">
                <h1 className="text-md text-[var(--color-primary)] font-semibold">
                  {customer?.customerName || "Customer Name"}
                </h1>
                <p className="text-xs text-[#ababab] font-medium">
                  {customer?.tableNo || "Table No"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>
      {/* Right Div */}
      <div className="flex-[1] bg-[var(--color-card-background)] mt-4 mr-3 h-[700px] rounded-lg pt-2">
        {/* Customer Info */}
        <CustomerInfo />
        <hr className="border-[var(--color-surface-dark)] border-t-2"></hr>
        {/* Cart Items */}
        <CartInfo />
        <hr className="border-[var(--color-surface-dark)] border-t-2"></hr>
        {/* Bills */}
        <BillInfo />
      </div>
      <BottomNav />
    </section>
  );
};

export default Menu;
