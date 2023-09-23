"use client";

import Image from 'next/image'
import Navbar from './components/Header'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import HorizontalImageCard from './components/HorizontalCard'
import Feature from './components/Feature'
import USP from './components/USP'
import Dashboard from './components/Dashboard'
import config from '../mocks/config.json'

export default function Home() {
  const data = config.templateId
  return (
    <>
    <Navbar />
    <Dashboard title={config.templateId.title} description={config.templateId.description} imageURL={config.templateId.landingPageUrl} />
    <USP title={data.USPTitle} USP={data.USPs} />
    <Feature title={data.featureTile} features={data.features} />
    <HorizontalImageCard title={data.pricing.Title} description={data.pricing.Description} imageURL={data.pricing.ImagURL}/>
    <Newsletter heading={data.Newsletter.title} description={data.Newsletter.description} buttontext={data.Newsletter.buttonText} placeholderValue={data.Newsletter.placeholder}/>
    <Footer />
    </>
  )
}
