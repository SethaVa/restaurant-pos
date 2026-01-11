import React from "react";
import type { Table } from "../../pages/tables";
import { getRandomBG } from "../../utils/getRandomColor";
import { useNavigate } from "react-router";
import { setCustomerTable } from "../../redux/slices/customerSlice";
import { useAppDispatch } from "../../redux/hooks";

const TableCard = ({ id, name, status, initial, seats }: Table) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const handleClick = (name: string) => {
    // if (status === "Booked") return;
    dispatch(setCustomerTable({ tableNo: name }));
    navigate("/menu");
  };

  return (
    <div
      onClick={() => handleClick(name)}
      className="w-[300px] bg-[var(--color-bg-footer)] p-4 rounded-lg cursor-pointer hover:bg-[var(--color-dark-charcoal)]"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[var(--color-whitesmoke)] text-xl font-semibold">
          {name}
        </h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[var(--color-dark-green)]"
              : "text-white bg-[var(--color-dark-yellow)]"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <h1
          className={`text-white rounded-full p-5 text-xl w-17 h-17 flex items-center justify-center`}
          style={{ backgroundColor: getRandomBG() }}
        >
          {initial}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
