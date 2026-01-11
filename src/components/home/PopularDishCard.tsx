import React from "react";

interface Dish {
  id: number;
  image: string;
  name: string;
  numberOfOrders: number;
}

const PopularDishCard = ({ id, image, name, numberOfOrders }: Dish) => {
  return (
    <div
      key={id}
      className="flex items-center gap-4 bg-[var(--color-background)] rounded-[15px] px-6 py-4 mx-6 mt-4"
    >
      <h1 className="text-[var(--color-primary)] font-bold text-xl mr-2">
        {id < 10 ? `0${id}` : id}
      </h1>
      <img src={image} alt={name} className="w-[50px] h-[50px] rounded-full" />
      <div>
        <h1 className="text-[#f5f5f5] font-semibold tracking-wide">{name}</h1>
        <p className="text-[#f5f5f5] text-sm font-semibold mt-1">
          <span className="text-[#ababab]">Orders: </span>
          {numberOfOrders}
        </p>
      </div>
    </div>
  );
};

export default PopularDishCard;
