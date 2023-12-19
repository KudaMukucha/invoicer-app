import Image from 'next/image'
import Hero from './components/Hero'
import InvoiceCTA from './components/InvoiceCTA'
import Steps from './components/Steps'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Steps/>
      <InvoiceCTA/>
      {/* <Steps/> */}
    </main>
  )
}
