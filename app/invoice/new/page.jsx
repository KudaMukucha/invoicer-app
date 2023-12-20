"use client"
import { useState } from 'react'
import { AiOutlineCloudDownload, AiOutlineCloudUpload, AiOutlinePrinter } from 'react-icons/ai'
import { CiMail } from 'react-icons/ci'
import { MdPreview } from 'react-icons/md'

export default function Page() {
    const [preview,setPreview] = useState(false)
  return (
    <div className='bg-slate-50 text-[14px] py-8 md:py-9 px-4 md:px-16'>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
           <div className="flex gap-4">
           <button onClick={()=>setPreview(!preview)} className='px-3 py-2 rounded-md border border-slate-400'>
               {
                preview ? (
                    <div className='flex items-center space-x-1'>
                         <MdPreview/>
                <span>Edit Form</span>
                    </div>
                )
                        : (
                            <div className='flex items-center space-x-1'>
                                 <MdPreview/>
                <span>Preview</span>
                            </div>
                        )
               }
            </button>
           <button className='flex items-center space-x-1 px-3 py-2 rounded-md border border-slate-400'>
                <AiOutlinePrinter/>
                <span>Print</span>
            </button>
            <button className='flex items-center space-x-1 px-3 py-2 rounded-md border border-slate-400'>
                <AiOutlineCloudDownload/>
                <span>Download</span>
            </button>
           </div>
            <div className="flex gap-4">
            <button className='flex items-center space-x-1 px-3 py-2 rounded-md border border-violet-400 text-violet-700'>
                <AiOutlineCloudUpload/>
                <span>Save Online</span>
            </button>
            <button className='flex items-center space-x-1 px-3 py-2 rounded-md border border-violet-400 text-violet-700'>
                <CiMail/>
                <span>Send</span>
            </button>
            </div>
        </div>
        {/* Invoice Form */}
        {
            preview ? (<div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
            <h2>Preview</h2>
            </div>) 
                    : (<div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
                    <h2>Form</h2>
                   </div>)
        }
        {/* Invoice Preview */}
        
    </div>
  )
}
