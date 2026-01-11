import React, { useState } from "react";
import { popularDishes } from "../../dump";
import PopularDishCard from "./PopularDishCard";

interface PopularDish {
  id: number;
  image: string; // or React.ReactNode if it's a component
  name: string;
  numberOfOrders: number;
}

const PopularDishes = () => {
  const [popularDish, setPopularDish] = useState<PopularDish[]>(popularDishes);
  return (
    <div className="mt-6 pr-6">
      <div className="bg-[var(--color-card-background)] w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[var(--color-primary)] text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a
            href=""
            className="text-[var(--color-light-blue)] text-sm font-semibold"
          >
            View all
          </a>
        </div>

        <div className="overflow-scroll h-[630px] scrollbar-hide pb-4">
          {popularDish.map((dish: PopularDish) => {
            return <PopularDishCard key={dish.id} {...dish} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
