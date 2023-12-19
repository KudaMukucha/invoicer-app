import { MdArrowForwardIos } from "react-icons/md";

export default function Steps() {
  return (
    <div className="py-8 md:py-16 px-4  md:px-16 bg-slate-50 mx-auto flex items-center justify-center font-sans">
       <div>
       <h2 className="text-2xl md:text-3xl font-semibold mb-4">Create Your First Invoice In Less Than 2 Minutes.</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-5">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
        <p className="border border-rose-200 rounded-full p-2 h-8 w-8 flex items-center justify-center bg-slate-100 text-sm">
            1
        </p>
        <p className="text-[14x]">Invoice Details</p>
        <MdArrowForwardIos className="hidden md:block" />
        </div>
        <div className="flex items-center gap-3 mb-4 md:mb-0">
        <p className="border border-rose-200 rounded-full p-2 h-8 w-8 flex items-center justify-center bg-slate-100 text-sm">
            2
        </p>
        <p className="text-[14x]">Your Bank Details</p>
        <MdArrowForwardIos className="hidden md:block" />
        </div>
        
        <div className="flex items-center gap-3">
        <p className="border border-rose-200 rounded-full p-2 h-8 w-8 flex items-center justify-center bg-slate-100 text-sm">
            3
        </p>
        <p className="text-[14x]">Select design and colors <br /> (Download or Email Your Invoice)</p>
        </div>
        </div>
       </div>
    </div>
  )
}
