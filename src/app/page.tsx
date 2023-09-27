"use client";

import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Cta from './components/Cta'
import Feature from './components/Feature'
import USP from './components/USP'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import template4Data from '../../data.json';

export default function Home() {
  return (
    <>
    <Navbar logo={template4Data?.navbar?.lightLogo} navItems={template4Data?.navbar?.navitems} />
    <Hero title={template4Data?.hero_section?.headline} description={template4Data?.hero_section?.sub_headline} />
    <USP title={template4Data?.USP?.title} USP={template4Data?.USP?.USPs} />
    <Feature title={template4Data?.feature?.title} features={template4Data?.feature?.features} />
    <Testimonials testimonials={template4Data?.testimonials} />
    <Pricing plans={template4Data?.choose_plan?.pricing} title={template4Data?.choose_plan?.title} subtitle={template4Data?.choose_plan?.subtitle} />
    <Cta title={template4Data?.add_card.title} description={template4Data?.add_card.desc}/>
    <Newsletter heading={template4Data?.waitlist?.title} description={template4Data?.waitlist?.subtitle} />
    <Footer socials={template4Data?.footer.socials} />
    </>
  )
}
