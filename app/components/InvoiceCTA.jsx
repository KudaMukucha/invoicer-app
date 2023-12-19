import ThemeLinkButton from "./ThemeLinkButton";

// import invoiceImage from '/public/images/invoice-template.png'
export default function InvoiceCTA() {
  return (
    <div className='invoice-cta flex items-center justify-center'>
        <div className="py-12 px-16 bg-white shadow-xl rounded-md">
            <ThemeLinkButton href={'/invoice/new'} className={'bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300'} title={'Create Your First Invoice'} />
        </div>
    </div>
  )
}
