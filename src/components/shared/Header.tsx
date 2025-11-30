import logo from "../../assets/react.svg";
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 px-8 bg-[var(--color-background)]'>
      {/* LOGO */}
      <div className='flex items-center gap-2'>
        <img src={logo} className='h-8 w-8' alt='restro logo' />
        <h1 className='text-lg font-semibold text-[var(--color-primary)]'>Restro</h1>
      </div>

      {/* SEARCH */}
      <div className='flex items-center gap-4 bg-[var(--color-background)] rounded-[15px] px-5 py-2 w-[500px]'>
        <FaSearch className='text-[var(--color-primary)]'/>
        <input 
            type='text'
            placeholder='Search'
            className='bg-[var(--color-background)] text-[var(--color-primary)] outline-none w-full'
        />
      </div>

      {/* LOGGED USER DETAILS */}
      <div className='flex items-center gap-4'>
        <div className='bg-[var(--color-background)] rounded-[15px] p-3 cursor-pointer'>
            <FaBell className='text-[var(--color-primary)] text-2xl'/>
        </div>
        <div className='flex items-center gap-3 cursor-pointer'>
            <FaUserCircle className='text-[var(--color-primary)] text-4xl' />
            <div className='text-md items-start'>
                <h1 className="text-md text-[var(--color-primary)] font-semibold">Amrit Raj</h1>
                <p className="text-xs text-[#ababab] font-medium">Admin</p>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
