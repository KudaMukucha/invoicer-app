import Image from 'next/image'
import Features from './components/Features'
import Hero from './components/Hero'
import InvoiceCTA from './components/InvoiceCTA'
import Pricing from './components/Pricing'
import Steps from './components/Steps'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Steps/>
      <InvoiceCTA/>
      {/* <Steps/> */}
      <Features/>
      <Pricing/>
    </main>
  )
}
