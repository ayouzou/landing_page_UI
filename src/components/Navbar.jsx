import React,{useState} from 'react'

import lock from '../assets/lock.svg'
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }

  return (
    <div className='w-full h-[96px] bg-white shadow-sm'>
        <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
            <img src='data:image/jpeg;base64,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' alt="logo" className='h-[25px] cursor-pointer'/>
            <div className="flex items-center">
                <ul className='hidden md:flex gap-4 '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='md:flex hidden'>
                <button className='flex justify-content-between items-center bg-transparent px-6 gap-2'>
                    <img src={lock} alt='lock'/>
                    Login
                </button>
                <button className='px-8 py-3 bg-[#208446]'>Sign up for free</button>
            </div>
            <motion.div whileTap={{ scale:0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
                <img src={toggle ? Close : Hamburger} alt="hamburger" />
            </motion.div>
        </div>
        <div>
            <motion.ul
                initial={{ opacity:0,x:200 }}
                animate={{ opacity:1,x:0 }}
                exit={{ opacity:0,x:200 }}
             className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden': 'hidden'}>
                <li className='p-4 hover:bg-gray-50'>Home</li>
                <li className='p-4 hover:bg-gray-50'>About</li>
                <li className='p-4 hover:bg-gray-50'>Support</li>
                <li className='p-4 hover:bg-gray-50'>Platform</li>
                <li className='p-4 hover:bg-gray-50'>Pricing</li> 
                <div className='flex flex-col my-4 gap-4'>
                    <button className='flex border border-[240136] justify-center items-center bg-transparent px-6 gap-2 py-4'>
                        <img src={lock} alt='lock'/>
                        Login
                    </button>
                    <button className='px-8 py-5 bg-[#208446]'>Sign up for free</button>
                </div>
            </motion.ul>
        </div>
    </div>
  )
}

export default Navbar