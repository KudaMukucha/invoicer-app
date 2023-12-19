import Link from 'next/link'
import React from 'react'
import ThemeLinkButton from './ThemeLinkButton'

export default function Navbar() {
  return (
    <header className='bg-violet-700 fixed right-0 left-0 top-0 w-full h-16 flex items-center justify-between px-16 text-slate-50 font-sans'>
        <Link href={'/'} className={'text-xl font-semibold'}>
        Invoicer
        </Link>
        <nav className='flex items-center gap-3 text-[14x]'>
          <Link href={'/'}>Features</Link>
          <Link href={'/'}>Pricing</Link>
          <Link href={'/'}>Quick Guide</Link>
        </nav>
        <div className='flex items-center text-[14x] gap-4'>
        <Link href={'/login'}>Login</Link>
          <ThemeLinkButton href={'/register'} title={'Register'} className={'bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300'}/>
        </div>
    </header>
  )
}
