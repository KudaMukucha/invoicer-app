import React from 'react'
import ThemeLinkButton from './ThemeLinkButton'
// import heroImg from '/public/images/hero-img.jpg'
import Image from 'next/image'
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineCreate } from 'react-icons/md';



export default function Hero() {
  return (
    <div className='mt-16 bg-violet-700 grid grid-cols-1 md:grid-cols-2 py-8 md:py-16 px-4 md:px-16 items-center gap-6 font-sans'>
        <div className="flex flex-col space-y-8 items-start">
          <h2 className='text-slate-50 text-3xl md:text-4xl font-bold'>Free Invoicer Generator - Invoice Maker</h2>
          <p className='text-slate-50 text-sm'>
            Create, Manage and Track Your Invoices Like A Pro! Download your Invoices as PDFs,Email and Print Invoices.
          </p>
          <ThemeLinkButton href={'/invoice/new'} className={'bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300'} title={'Create Your First Invoice'} icon={MdOutlineCreate}/>
        </div>
        <div className='text-center mx-auto'>
          {/* <Image src={heroImg} alt={"Hero Image"} /> */}
          <LiaFileInvoiceDollarSolid className='w-64 h-72 text-white'/>
        </div>
    </div>
  )
}
