import Image from 'next/image'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
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
      <FAQ/>
    </main>
  )
}
