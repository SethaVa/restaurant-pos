import React from 'react'

interface MiniCardProps {
  title: string;
  icon: React.ReactNode;
  number?: string | number;
  footerNum?: string | number;
  className?: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ title, icon, number, footerNum }) => {
  return (  
    <div className='bg-[var(--color-card-background)] py-5 px-5 rounded-lg w-[50%]'>
        <div className='flex items-start justify-between'>
            <h1 className='text-[var(--color-primary)] text-lg font-semibold tracking-wide'>
                {title}
            </h1>
            <button className={`${title === "Total Earnings"? 'bg-[var(--color-percentage)]': 'bg-[var(--color-currency)]'} p-3 rounded-lg text-[var(--color-primary)] text-2xl`}>{icon}</button>
        </div>
        <div>
            <h1 className='text-[var(--color-primary)] text-4xl font-bold mt-5'>{number}</h1>
            <h1 className='text-[var(--color-primary)] text-lg mt-2'><span className='text-[var(--color-percentage)]'>{footerNum}</span> than yesterday</h1>
        </div>
    </div>
  )
}

export default MiniCard
