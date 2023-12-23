import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import React from 'react'
import PreviewTable from './PreviewTable';

export default function FormPreview({data}) {
  const  {
    companyName,
    invoiceAuthor,
    companyAddress,
    companyCity,
    companyCountry,
    clientCompany,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    invoiceDueDate,
    logoUrl,
    tableData
} = data

  return (
    <div
    className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto"
  >
    {/* Image and Invoice Label */}
    <div className="flex justify-between items-center">
      {/* Image Upload */}

      <div className="flex items-center justify-center">
        {logoUrl && (
          <CldImage
            width={"120"}
            height={"120"}
            src={logoUrl}
            alt="Invoice Logo"
          />
        ) }
      </div>

      <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
    </div>
    {/* Company Details */}
    <div className="flex flex-col w-1/2 mt-6">
      <div className="flex">
        <p className='font-medium'>Company Name : &nbsp;</p>
        <p >{companyName}</p>
      </div>
     
      <div className="flex">
        <p className='font-medium'>Your Name : &nbsp;</p>
        <p >{invoiceAuthor}</p>
      </div>
      <div className="flex">
        <p className='font-medium'>Company Address : &nbsp;</p>
        <p >{companyAddress}</p>
      </div>
      <div className="flex">
        <p className='font-medium'>Company City : &nbsp;</p>
        <p >{companyCity}</p>
      </div>
      <div className="flex">
        <p className='font-medium'>Company Country : &nbsp;</p>
        <p >{companyCountry}</p>
      </div>
    </div>

    {/* Client Details */}
    <div className="flex justify-between gap-5 mb-8">
      <div className="flex flex-col w-1/2 mt-6">
        <h2 className="mb-2 font-medium">Bill To:</h2>
        <div className="flex">
        <p className='font-medium'>Client Company : &nbsp;</p>
        <p className=''>{clientCompany}</p>
      </div>
      <div className="flex">
        <p className='font-medium'>Client Address : &nbsp;</p>
        <p >{clientAddress}</p>
      </div>
      <div className="flex">
        <p className='font-medium'>Client City : &nbsp;</p>
        <p >{clientCity}</p>
      </div>
      <div className="flex">
        <p className='font-medium'>Client Country : &nbsp;</p>
        <p >{clientCountry}</p>
      </div>
      </div>
      <div className="flex flex-col w-1/2 mt-6">
        <div className="flex gap-7">
          <p
            className="font-bold text-slate-600 mb-2"
          >
            Invoice Number
          </p>
         <p>{invoiceNumber}</p>
        </div>
        <div className="flex gap-7">
          <p
            className="font-bold text-slate-600 mb-2"
          >
            Invoice Date
          </p>
         <p>{invoiceDate}</p>
        </div>
        <div className="flex gap-7">
          <p
            className="font-bold text-slate-600 mb-2"
          >
            Invoice Due Date
          </p>
         <p>{invoiceDueDate}</p>
        </div>
      </div>
    </div>
    {/* FORM TABLE */}
    <PreviewTable tableData={tableData} />
   
  </div>
  )
}
