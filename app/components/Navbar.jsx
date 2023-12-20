'use client'
import Link from 'next/link'
import ThemeLinkButton from './ThemeLinkButton'
import {BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

export default function Navbar() {
  const [show,setShow] = useState(false)
  function showMenu(){
    setShow(true)
    // console.log(show)
  }
  function hideMenu(){
    setShow(false)
  }
  return (
  <>
    <header className='bg-violet-700 fixed right-0 left-0 top-0 w-full h-16 flex items-center justify-between px-16 text-slate-50 font-sans'>
        <Link href={'/'} className={'text-xl font-semibold'}>
        Invoicer
        </Link>
        <nav className='hidden sm:flex items-center gap-3 text-[14x]'>
          <Link href={'/'}>Features</Link>
          <Link href={'/'}>Pricing</Link>
          <Link href={'/'}>Quick Guide</Link>
        </nav>
        <div className='hidden sm:flex items-center text-[14x] gap-4'>
        <Link href={'/login'}>Login</Link>
          <ThemeLinkButton href={'/register'} title={'Register'} className={'bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300'}/>
        </div>
        {/* Hamburger Menu */}
        <button className='sm:hidden' onClick={showMenu}>
          <BiMenu className='text-3xl'/>
        </button>
    </header>

    {/* Mobile Navigation */}
    <div className={show ? "sm:hidden fixed w-36 bg-slate-800 bg-opacity-90 h-screen z-50 top-0 right-0 p-4 font-sans text-slate-50" : "hidden sm:hidden fixed w-36 bg-slate-800 bg-opacity-90 h-screen z-50 top-0 right-0 p-4 font-sans text-slate-50"}>
        <div className="flex justify-between items-center mb-10">
        <h2 className='font-semibold'>Invoicer</h2>
        <button onClick={hideMenu}>
          <AiOutlineClose className='text-2xl'/>
        </button>
        </div>
        <nav className='flex flex-col items-start gap-3 text-[14x] mb-10'>
          <Link href={'/'}>Features</Link>
          <Link href={'/'}>Pricing</Link>
          <Link href={'/'}>Quick Guide</Link>
        </nav>
        <div className='flex flex-col items-start text-[14x] gap-4'>
        <Link href={'/login'}>Login</Link>
          <ThemeLinkButton href={'/register'} title={'Register'} className={'bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300'}/>
        </div>
    </div>
  </>
  )
}
