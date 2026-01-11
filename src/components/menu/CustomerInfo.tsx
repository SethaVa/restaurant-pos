import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import formatDateTime from "../../utils/formatDateTime";
import Avatar from "../shared/Avatar";

const CustomerInfo = () => {
  const customer = useSelector((state: RootState) => state.customer);

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-[var(--color-whitesmoke)] font-semibold tracking-wide">
          {customer.customerName || "Customer Name"}
        </h1>
        <p className="text-xs text-[var(--color-secondary)] font-medium mt-1">
          #{customer.orderId || "N/A"}/Dine in
        </p>
        <p className="text-xs text-[var(--color-secondary)] font-medium mt-1">
          {formatDateTime(customer.orderDate)}
        </p>
      </div>
      <button className="bg-[var(--color-currency)] text-xl font-bold rounded-lg">
        <Avatar
          initials={customer.customerName || "Customer Name"}
          size="medium"
          className="text-xl font-bold rounded-lg p-0 bg-transparent text-[var(--color-surface-dark)]"
        />
      </button>
    </div>
  );
};

export default CustomerInfo;
