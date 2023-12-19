import Link from 'next/link'
import React from 'react'

export default function ThemeLinkButton({className,href,title}) {
  return (
    <Link href={href} className={`text-white font-medium rounded-lg text-sm px-6 py-3 text-center ${className} `}>
        {title}
    </Link>

  )
}
