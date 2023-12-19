import Link from "next/link";
import { PiSealCheck } from "react-icons/pi";
import { IoDiamondSharp } from "react-icons/io5";
import AccordionFAQs from "./AccordionFAQs";

export default function FAQ() {

  return (
    <div className="bg-white flex flex-col gap-6 py-8  md:py-16 px-4 md:px-16 font-sans">
        <div>
        <div className="flex flex-col items-center justify-center mb-12">
        <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Frequently Asked Questions(FAQs)</h2>
        <div className="max-w-2xl">
          <AccordionFAQs/>
        </div>
        </div>
       
        </div>
    </div>
  )
}