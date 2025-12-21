import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-[500px] bg-[var(--color-bg-footer)] p-4 rounded-lg">
      <div className="flex items-center gap-5">
        <button className="bg-[var(--color-currency)] p-3 text-xl font-bold rounded-lg">
          AM
        </button>

        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[var(--color-primary)] text-lg font-semibold tracking-wide">
              Amrit Raj
            </h1>
            <p className="text-[var(--color-secondary)] text-sm">
              #101/ Dine in
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className="text-green-600 bg-[var(--color-dark-green)] px-2 rounded-lg py-1">
              <FaCheckDouble className="inline mr-2" />
              Ready
            </p>
            <p className="text-[var(--color-secondary)] text-sm">
              <FaCircle className="inline mr-2 text-green-600" />
              Ready to serve
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-[var(--color-secondary)]">
        <p>January 18, 2025 08:32 PM</p>
        <p>8 Items</p>
      </div>
      <hr className="w-full mt-4 border-t border-gray-500"></hr>
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[var(--color-primary)] text-xl font-semibold">
          Total
        </h1>
        <p className="text-[var(--color-primary)] text-lg font-semibold">
          $ 250.00
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
