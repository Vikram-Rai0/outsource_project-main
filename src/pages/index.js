
import Head from 'next/head'
import Hero from '@/components/hero'
import TrustedBy from '@/components/trustedBy'
import Services from '@/components/services'
import AboutUs from '@/components/aboutUs'
import Faq from '@/components/faq'
import ContactUs from '@/components/contact'
import HowToBook from '@/components/howtobook'
import Gallery from '@/components/gallery'
import Banner from '@/components/banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Good-Day Professional Cleaning</title>
        <meta name="description" content="gooddayprofessionalcleaning is a australian cleaning service company based in sydney providing highly qualified cleaners and various cleaning services throughtout sydney region." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="goodday,gooddayprofessional,gooddaycleaning,gooddayprofessionalcleaning,Good-day professional cleaning,good day,good-day professional cleaning,gooddayprofessionalcleaning,good-day professional cleaning,Good-day,Cleaing comapany in Australia, quality cleaning services, australia cleaning company, cleaning company located in australia, cleaning company" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="icon" href="/trans_logo.png" type="image/icon type" />
      </Head>

      <main>
          <Hero />
          <Banner />
          <TrustedBy />
          <Services />
          <HowToBook />
          <AboutUs />
          <Gallery />
          <Faq />
          <ContactUs />
      </main>
    </>
  )
}
