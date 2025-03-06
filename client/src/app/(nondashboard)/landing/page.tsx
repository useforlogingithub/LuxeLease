import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import DiscoverSection from './DiscoverSection'
import CallToActionSection from './CallToActionSection'
import FooterSection from './FooterSection'


function page() {
  return (
    <div>
        <HeroSection></HeroSection>
        <FeatureSection />
        <DiscoverSection />
        <CallToActionSection />
        <FooterSection />
    </div>
  )
}

export default page
