import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import type { RootState } from "../../redux/store";
import { formatUSD } from "../../utils/formatUSD";
import { formatNumber } from "../../utils/formatNumber";

const BillInfo = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const totalPrice: number = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax: number = (totalPrice * taxRate) / 100;
  const totalPriceWithTax: number = totalPrice + tax;

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[var(--color-secondary)] font-medium mt-2">
          Items({cartData.length})
        </p>
        <h1 className="text-[var(--color-whitesmoke)] text-md font-bold">
          {formatUSD(totalPrice)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[var(--color-secondary)] font-medium mt-2">
          Tax({formatNumber(taxRate)}%)
        </p>
        <h1 className="text-[var(--color-whitesmoke)] text-md font-bold">
          ${tax}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[var(--color-secondary)] font-medium mt-2">
          Total With Tax
        </p>
        <h1 className="text-[var(--color-whitesmoke)] text-md font-bold">
          {formatUSD(totalPriceWithTax)}
        </h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[var(--color-background)] px-3 py-2 w-full rounded-lg text-[var(--color-secondary)] font-semibold">
          Cash
        </button>
        <button className="bg-[var(--color-background)] px-3 py-2 w-full rounded-lg text-[var(--color-secondary)] font-semibold">
          Online
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[var(--color-light-blue)] px-3 py-2 w-full rounded-lg text-[var(--color-whitesmoke)] font-semibold">
          Print Receipt
        </button>
        <button className="bg-[var(--color-currency)] px-3 py-2 w-full rounded-lg text-[var(--color-whitesmoke)] font-semibold">
          Place Order
        </button>
      </div>
    </>
  );
};

export default BillInfo;
