import Link from "next/link";
import { PiSealCheck } from "react-icons/pi";
import { IoDiamondSharp } from "react-icons/io5";

export default function Pricing() {
  return (
    <div className="bg-slate-100 flex flex-col gap-6 py-8  md:py-16 px-4 md:px-16 font-sans">
        <div>
        <div className="flex flex-col items-center justify-center mb-12">
        <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Invoicer Pricing</h2>
        <p>
            Only pay when you need premium features.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-2xl rounded-lg p-12 flex flex-col gap-6">
                {/* Icon */}
                <div className="flex items-center justify-center rounded-full w-16 h-16 bg-purple-200">
                    <PiSealCheck className="backdrop:text-purple-500 text-3xl"/>
                </div>
                <h4 className="font-bold text-slate-900 text-xl">Free Plan</h4>
                <p className="text-slate-600 text-[14x]">
                    Create up to 50 invoices in a year - completely free. No hidden charges.
                </p>
                <Link href={'/invoice/new'} className={'text-blue-500 hover:text-blue-700 font-semibold'}>
                    Create Free Invoice
                </Link>
            </div>

            <div className="bg-white shadow-2xl rounded-lg p-12 flex flex-col gap-6">
                {/* Icon */}
                <div className="flex items-center justify-center rounded-full w-16 h-16 bg-purple-200">
                    <IoDiamondSharp className="backdrop:text-purple-500 text-3xl"/>
                </div>
                <h4 className="font-bold text-slate-900 text-xl">Premium Plan</h4>
                <p className="text-slate-600 text-[14x]">
                    Manage your invoices at a faster pace at a minimal cost.
                </p>
                <Link href={'/premium/'} className={'text-blue-500 hover:text-blue-700 font-semibold'}>
                    Explore Premium Features
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}
