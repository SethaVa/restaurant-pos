import { FaSearch } from 'react-icons/fa'
import OrderList from './OrderList'

const RecentOrders = () => {
  return (
    <div className='px-8 mt-6'>
      <div className='bg-[var(--color-card-background)] w-full h-[450px] rounded-lg'>
        <div className='flex justify-between items-center px-6 py-4'>
            <h1 className='text-[var(--color-primary)] text-lg font-semibold tracking-wide'>
                Recent Orders
            </h1>
            <a href='' className='text-[var(--color-light-blue)] text-sm font-semibold'>
                View all
            </a>
        </div>

        <div className='flex items-center gap-4 bg-[var(--color-background)] rounded-[15px] px-6 py-4 mx-6'>
            <FaSearch className='text-[var(--color-primary)]'/>
            <input 
                type='text'
                placeholder='Search recent orders'
                className='bg-[var(--color-background)] text-[var(--color-primary)] outline-none'
            />
        </div>

        {/* Order list */}
        <div className='mt-4 px-6 overflow-scroll h-[300px] scrollbar-hide'>
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
            <OrderList />
        </div>
      </div>
    </div>
  )
}

export default RecentOrders
