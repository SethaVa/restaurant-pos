import React from "react";
import { FaNotesMedical } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import type { CartItemInterface } from "../../redux/slices/cartSlice";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  pricePerQuantity: number;
  onAddCart: (item: CartItemInterface) => void;
  onRemoveCart: (item: CartItemInterface) => void;
}

const CartItem = ({
  id,
  name,
  price,
  quantity,
  pricePerQuantity,
  onAddCart,
  onRemoveCart,
}: CartItemProps) => {
  return (
    <div className="bg-[var(--color-background)] rounded-lg px-4 py-4 mb-2">
      <div className="flex items-center justify-between">
        <h1 className="text-[var(--color-secondary)] font-semibold tracking-wide text-md">
          {name || "Item Name"}
        </h1>
        <p className="text-[var(--color-secondary)] font-semibold">
          x{quantity || "Item Quantity"}
        </p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <RiDeleteBin2Fill
            onClick={() =>
              onRemoveCart({ id, name, price, quantity, pricePerQuantity })
            }
            className="text-[var(--color-secondary)] cursor-pointer"
            size={20}
          />
          <FaNotesMedical
            onClick={() =>
              onAddCart({ id, name, price, quantity, pricePerQuantity })
            }
            className="text-[var(--color-secondary)] cursor-pointer"
            size={20}
          />
        </div>
        <p className="text-[var(--color-whitesmoke)] text-md font-bold">
          ${price || "Item Price"}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
