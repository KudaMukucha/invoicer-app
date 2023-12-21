import React from 'react'

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
    invoiceDueDate
} = data
  return (
    <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
            <h2>Preview</h2>
            <h2>Company Name: {companyName}</h2>
            <h2>Client Company: {clientCompany}</h2>
            </div>
  )
}
