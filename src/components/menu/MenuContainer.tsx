import React, { useState } from "react";
import { menus, type Menu, type MenuItem } from "../../dump";
import { GrRadialSelected } from "react-icons/gr";
import { formatUSD } from "../../utils/formatUSD";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hooks";
import { addItems } from "../../redux/slices/cartSlice";

export interface SelectedMenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  count: number;
}

const MenuContainer = () => {
  const [selectedCategory, setSelectedCategirt] = useState<Menu | null>(null);
  const [itemCount, setItemCount] = useState<number>(0);
  const [itemId, setItemId] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const increase = (id: number) => {
    setItemId(id);
    setItemCount((prev) => prev + 1);
  };
  const decrease = (id: number) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };
  const handleAddToCart = (item: MenuItem) => {
    if (itemCount === 0) return;

    const { name, price } = item;
    const newCart = {
      id: new Date(),
      name,
      pricePerQuantity: price,
      quantity: itemCount,
      price: price * itemCount,
    };

    dispatch(addItems(newCart));
    setItemCount(0);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setItemId(0);
                setItemCount(0);
                setSelectedCategirt(menu);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[var(--color-whitesmoke)] text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selectedCategory?.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-[var(--color-secondary)] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-[var(--color-surface-dark)] border-t-2 mt-4" />
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selectedCategory?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer bg-[var(--color-card-background)] hover:bg-[var(--color-surface-dark)]"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-[var(--color-whitesmoke)] text-lg font-semibold">
                  {item.name}
                </h1>
                <button onClick={() => handleAddToCart(item)}>
                  <FaShoppingCart
                    size={30}
                    className="bg-[var(--color-dark-green)] text-[var(--color-percentage)] p-2 rounded-lg cursor-pointer"
                  />
                </button>
              </div>

              <div className="flex items-center justify-between w-full">
                <p className="text-[var(--color-secondary)] text-xl font-bold">
                  {formatUSD(item.price)}
                </p>

                <div className="flex items-center justify-between bg-[var(--color-background)] px-4 py-1 rounded-lg gap-5 z-20">
                  <button
                    className="text-yellow-500 text-2xl cursor-pointer"
                    onClick={() => decrease(item.id)}
                  >
                    &minus;
                  </button>
                  <span className="text-white">
                    {itemId === item.id ? itemCount : "0"}
                  </span>
                  <button
                    className="text-yellow-500 text-2xl cursor-pointer"
                    onClick={() => increase(item.id)}
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
