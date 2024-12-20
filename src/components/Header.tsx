import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='absolute w-screen'>
       <nav className="w-3/5 max-w-[60vw] xl:max-w-[90vw] mx-auto flex items-center justify-between h-[100px]">
      <span>
        <Image
          src="/logo/logo.svg"
                      alt="Netflix"
                      width={130}
                      height={100}
          className="w-[130px] relative z-10"
        />
      </span>
      <div className="flex gap-1">
        <button type='button' className="relative z-10 btn">English</button>
        <button type='button' className="relative z-10 btn btn-red-sm">Sign In</button>
      </div>
    </nav>
    </header>
  )
}

export default Header
