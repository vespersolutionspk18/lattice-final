import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PartnerHero from '../components/PartnerHero';
import Hero from '../homecomponents/Hero';
import PartnerApplicationForm from '../components/PartnerApplicationForm';

const PartnerPage = () => {
  const gradientBackground = {
    background: `
      linear-gradient(180deg,
        rgba(0, 255, 255, 0) 0%,
        rgba(0, 255, 255, 0) 30%,
        rgba(0, 255, 255, 0.15) 50%,
        rgba(0, 255, 255, 0) 70%
      ),
      radial-gradient(ellipse 120% 80% at 50% 100%,
        #00FFFF 0%,
        #0066FF 25%,
        #1b2e9e 50%,
        #1b2e9e 65%,
        #1b2e9e 80%,
        #0a1128 100%
      ),
      #000000
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <Header
        enableScrollEffects={false}
        cubeColor="#1b2e9e"
        buttonText="Apply Now"
        buttonColor="#1b2e9e"
        hoverColor="#1b2e9e"
      />
      <Hero
        preHeader=""
        headline="Partner With Us, Build Success Together"
        subtitle="Your complete B2B solution for 3-D design and CRM, remote employees to grow your business, trusted by industry leaders nationwide"
        backgroundStyle={gradientBackground}
        height="70vh"
        showARVRBanner={false}
        showForm={false}
        showCapterra={false}
        buttonColors={{
          contactUs: '#1b2e9e'
        }}
        frostedGlassOpacity={0.127}
        headlineColor="#ffffff"
        subtitleColor="#ffffff"
      />
      <PartnerHero />
      <PartnerApplicationForm />
      <Footer backgroundColor="#1b2e9e" />
    </>
  );
};

export default PartnerPage;
