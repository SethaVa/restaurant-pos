import React, { useState } from 'react'
import { popularDishes } from '../../dump';

interface PopularDish {
  id: number;
  image: string;    // or React.ReactNode if it's a component
  name: string;
  numberOfOrders: number;
}

const PopularDishes = () => {
    const [popularDish, setPopularDish] = useState<PopularDish[]>(popularDishes);
  return (
    <div className='mt-6 pr-6'>
      <div className='bg-[var(--color-card-background)] w-full rounded-lg'>
        <div className='flex justify-between items-center px-6 py-4'>
            <h1 className='text-[var(--color-primary)] text-lg font-semibold tracking-wide'>
                Popular Dishes
            </h1>
            <a href='' className='text-[var(--color-light-blue)] text-sm font-semibold'>
                View all
            </a>
        </div>

        <div className='overflow-scroll h-[680px] scrollbar-hide'>
            {
                popularDish.map((dish: PopularDish) => {
                    return (
                        <div key={dish.id} className='flex items-center gap-4 bg-[var(--color-background)] rounded-[15px] px-6 py-4 mx-6 mt-4'>
                            <h1 className='text-[var(--color-primary)] font-bold text-xl mr-5'>{dish.id < 10? `0${dish.id}`: dish.id}</h1>
                            <img src={dish.image} alt={dish.name} className='w-[50px] h-[50px] rounded-full'/>
                            <div>
                                <h1 className='text-[#f5f5f5] font-semibold tracking-wide'>{dish.name}</h1>
                                <p className='text-[#f5f5f5] text-sm font-semibold mt-1'>
                                    <span className='text-[#ababab]'>Orders: </span>
                                    {dish.numberOfOrders}
                                </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
      </div>
    </div>
  )
}

export default PopularDishes
