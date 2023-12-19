import { BsCurrencyDollar } from 'react-icons/bs'
import { MdOutlineDashboardCustomize,MdOutlineAssignmentLate,MdOutlineAnalytics, MdOutlineCreate  } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";
import { LuReceipt } from "react-icons/lu";
import { HiOutlineTemplate } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import ThemeLinkButton from './ThemeLinkButton';


export default function Features() {
    const features =[
        {
            icon: MdOutlineDashboardCustomize,
            title:'Invoice Customization',
            description:'Personalize your invoices with custom logos, colors, and fonts. '
        },
        {
            icon: CiViewTimeline,
            title:'Time Tracking',
            description:'Track billable hours and automatically integrate them into invoices.'
        },
        {
            icon: LuReceipt,
            title:'Expense Receipt Capture',
            description:'Capture and attach receipts to invoices for transparent expense documentation.'
        },
        {
            icon: HiOutlineTemplate,
            title:'Invoice Templates',
            description:'Choose from a variety of professional templates to create polished and branded invoices.'
        },
        {
            icon: BsCurrencyDollar,
            title:'Tax Calculation',
            description:'Automatically calculate taxes based on predefined rules or custom tax rates.'
        },
        {
            icon: AiOutlineSchedule,
            title:'Invoice Scheduling',
            description:'Set up future invoice generation and delivery for efficient billing.'
        },
        {
            icon: MdOutlineAssignmentLate ,
            title:'Late Fee Calculation',
            description:'Automatically calculate and apply late fees to overdue invoices.'
        },
        {
            icon: MdOutlineAnalytics,
            title:'Reporting and Analytics',
            description:'Gain insights into your invoicing history and track performance metrics. '
        },

    ]
  return (
    <div className="bg-slate-900 py-8 md:py-16 md:px-16 px-4 text-slate-50 font-sans flex flex-col items-center gap-8">
        <h2 className='text-center text-2xl md:text-3xl font-semibold mb-10'>Features of the Invoicer</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-7">
           {
            features.map((feature,i)=>{
                const Icon = feature.icon
                return(
                    <div className="mb-4" key={i}>
                    <div className="border border-purple-400 rounded-md py-4 w-14 h-14 flex items-center justify-center mb-3">
                        <Icon className='text-3xl'/>
                    </div>
                    <p className='mb-3 text-xl'>
                    {feature.title}
                    </p>
                    <p className='text-sm text-slate-300'>
                    {feature.description} 
                    </p>
                </div>
                )
            })
           }
        </div>
        <ThemeLinkButton href={'/invoice/new'} className={'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300'} title={'Create Invoice For Free'}/>
    </div>
  )
}
