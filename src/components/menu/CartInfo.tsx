import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import {
  addItems,
  removeItem,
  type CartItemInterface,
} from "../../redux/slices/cartSlice";
import CartItem from "./CartItem";
import { useAppDispatch } from "../../redux/hooks";

const CartInfo = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveCart = (item: CartItemInterface) => {
    dispatch(removeItem(item.id));
  };

  const handleAddToCart = (item: CartItemInterface) => {
    dispatch(addItems(item));
  };

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  return (
    <div className="px-4 py-2">
      <h1 className="text-lg text-[var(--color-light-silver)] font-semibold tracking-wide">
        Order Details
      </h1>
      <div
        className="mt-4 overflow-y-scroll scrollbar-hide h-[320px]"
        ref={scrollRef}
      >
        {cartData.length ? (
          cartData.map((item: CartItemInterface) => (
            <CartItem
              key={item.id}
              {...item}
              onRemoveCart={handleRemoveCart}
              onAddCart={handleAddToCart}
            />
          ))
        ) : (
          <>
            <p className="text-[var(--color-secondary)] text-sm flex justify-center items-center h-[320px]">
              Your cart is empty. Start adding items
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CartInfo;
