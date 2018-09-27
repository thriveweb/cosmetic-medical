import React from 'react'
import _kebabCase from 'lodash/kebabCase'

import Content from '../components/Content'
import NavLink from '../components/NavLink'
import PageHeader from '../components/PageHeader'
import AddressFloatingBox from '../components/AddressFloatingBox'
import EnquiryFloatingBox from '../components/EnquiryFloatingBox'
import LazyImage from '../components/LazyImage'
import ServicesCategory from '../components/ServicesCategory'
import BookBanner from '../components/BookBanner'
import StaffSection from '../components/StaffSection'
import HealthProvidersSection from '../components/HealthProvidersSection'
import InstagramFeed from '../components/InstagramFeed'
import MapBanner from '../components/MapBanner'
import EnquiryFormSimple from '../components/EnquiryFormSimple'
import BenefitsSection from '../components/BenefitsSection'
import ImageGallery from '../components/ImageGallery'

import './Home.css'

export default ({ page, globalSettings, services, staff, socialSettings }) => {
  const {
    pageHeader,
    introSection,
    servicesSection,
    bookBanner,
    staffSection,
    benefitsSection,
    healthProviders,
    enquirySection,
    gallery
  } = page
  return (
    <div className='Page'>
      {pageHeader && (
        <PageHeader
          title={pageHeader.title}
          subtitle={pageHeader.subtitle}
          content={pageHeader.content}
          backgroundImage={pageHeader.backgroundImage}
        />
      )}

      {globalSettings && (
        <section className='Section light noPadding'>
          <AddressFloatingBox
            address={globalSettings.address}
            phone={globalSettings.phone}
            email={globalSettings.email}
            openingHours={globalSettings.openingHours}
            buttonLinkTo={globalSettings.bookNow}
          />
        </section>
      )}

      {introSection && (
        <section className='Section light' id={_kebabCase('About')}>
          <div className='Container'>
            <div className='Home--IntroSection'>
              <LazyImage src={introSection.image} alt={introSection.title} />
              <div>
                <h2 className='H2'>{introSection.title}</h2>
                <Content source={introSection.content} />
                {introSection.button && (
                  <NavLink link='Our Dentists & Staff' className='Button'>
                    {introSection.button.buttonTitle}
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {servicesSection && (
        <section className='Section' id={_kebabCase('Services')}>
          <div className='Container'>
            <div className='Home--ServicesSection'>
              <div className='Home--ContentWrap'>
                <h2 className='H2'>{servicesSection.title}</h2>
                <Content source={servicesSection.content} />
              </div>
              {services &&
                services.map(servicesCategory => (
                  <ServicesCategory
                    servicesCategory={servicesCategory}
                    key={servicesCategory.title}
                  />
                ))}
            </div>
          </div>
        </section>
      )}

      {bookBanner && (
        <BookBanner
          title={bookBanner.title}
          content={bookBanner.content}
          buttonLinkTitle={bookBanner.buttonLinkTitle}
          buttonLinkTo={globalSettings.bookNow}
        />
      )}

      {staffSection && (
        <StaffSection
          id={_kebabCase('Our Dentists & Staff')}
          title={staffSection.title}
          staff={staff}
        />
      )}

      {benefitsSection && (
        <BenefitsSection
          title={benefitsSection.title}
          image={benefitsSection.image}
          content={benefitsSection.content}
          benefits={benefitsSection.benefits}
        />
      )}

      {healthProviders && (
        <HealthProvidersSection healthProviders={healthProviders} />
      )}

      {socialSettings &&
        socialSettings.instagram && (
          <section className='Section thick'>
            <div className='Container'>
              <h2 className='H2 taCenter'>Follow us on Instagram</h2>
            </div>
            <section className='Section thin'>
              <InstagramFeed
                instagramUrl={socialSettings.instagram}
                count={6}
              />
            </section>
            <div className='Container taCenter'>
              <a
                className='Button Button--tertiary'
                href={socialSettings.instagram}
              >
                Follow Us
              </a>
            </div>
          </section>
        )}

      {globalSettings && (
        <MapBanner
          id={_kebabCase('Contact')}
          apiKey='AIzaSyCcfv8L8FmeieABBF2u1dZxeB3NlULe_Nw'
          lat={globalSettings.location.lat}
          lng={globalSettings.location.lng}
        />
      )}

      {enquirySection && (
        <EnquiryFloatingBox>
          <h2 className='H2 taCenter'>{enquirySection.title}</h2>
          <p>{enquirySection.content}</p>
          {globalSettings && (
            <EnquiryFormSimple
              name='Enquiry Form'
              siteTitle={globalSettings.siteTitle}
            />
          )}
        </EnquiryFloatingBox>
      )}
    </div>
  )
}
