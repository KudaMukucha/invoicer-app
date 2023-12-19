import Link from 'next/link'
import { MdOutlineCreate } from "react-icons/md";

export default function ThemeLinkButton({className,href,title,icon:Icon}) {
  return (
    <Link href={href} className={`text-white font-medium rounded-lg text-sm px-6 py-3 text-center flex items-center ${className} `}>
        {title} 
        {/* <span className='ml-2'>
        <Icon/>
        </span> */}
    </Link>

  )
}
