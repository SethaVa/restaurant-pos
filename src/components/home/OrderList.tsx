import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderList = () => {
  return (
    <div className='flex items-center gap-5 mb-3'>
      <button className='bg-[var(--color-currency)] p-3 text-xl font-bold rounded-lg'>AM</button>
      <div className='flex items-center justify-between w-[100%]'>
        <div className='flex flex-col items-start gap-1'>
            <h1 className='text-[var(--color-primary)] text-lg font-semibold tracking-wide'>Amrit Raj</h1>
            <p className='text-[var(--color-secondary)] text-sm'>8 Items</p>
        </div>

        <div className=''>
            <h1 className='text-[var(--color-currency)] font-semibold border border-[var(--color-currency)] rounded-lg p-1'>
                Table No: 3
            </h1>
        </div>

        <div className='flex flex-col items-start gap-2'>
            <p className='text-green-600 px-4'>
                <FaCheckDouble className='inline mr-2'/>
                Ready
            </p>
            <p className='text-[var(--color-secondary)] text-sm'>
                <FaCircle className='inline mr-2 text-green-600'/>
                Ready to serve
            </p>
        </div>
      </div>
    </div>
  )
}

export default OrderList
