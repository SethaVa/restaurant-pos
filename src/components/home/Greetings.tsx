import React, { useEffect, useState } from 'react'
import { formatDate, formatTime } from '../../utils';

const Greetings = () => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date())
        }, 1000)

        return () => clearInterval(timer);
    }, [])

  return (
    <div className='flex justify-between items-center px-8 mt-5'>
      <div>
        <h1 className='text-[var(--color-primary)] text-2xl font-semibold tracking-wide'>Good Morning, Amrit</h1>
        <p className='text-[var(--color-secondary)] text-sm'>Give your best services for customers</p>
      </div>
      <div>
        <h1 className='text-[var(--color-primary)] text-3xl font-bold tracking-wide w-[130px]'>{formatTime(dateTime)}</h1>
        <p className='text-[var(--color-secondary)] text-sm'>{formatDate(dateTime)}</p>
      </div>
    </div>
  )
}

export default Greetings