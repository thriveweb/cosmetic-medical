import React from 'react'

import 'site/globalStyles.css'
import data from 'site/data.json'
import Home from 'site/views/Home'

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]

const HomePagePreview = ({ entry, widgetFor, getAsset }) => {
  const globalSettings = getDocument('settings', 'global')

  return (
    <div>
      <Home
        globalSettings={globalSettings}
        page={{
          title: entry.getIn(['data', 'title']),
          pageHeader: {
            title: entry.getIn(['data', 'pageHeader', 'title']),
            subtitle: entry.getIn(['data', 'pageHeader', 'subtitle']),
            content: entry.getIn(['data', 'pageHeader', 'content']),
            backgroundImage: entry.getIn([
              'data',
              'pageHeader',
              'backgroundImage'
            ])
          },
          introSection: {
            title: entry.getIn(['data', 'introSection', 'title']),
            image: entry.getIn(['data', 'introSection', 'image']),
            button: {
              buttonTitle: entry.getIn(['data', 'introSection', 'button', 'buttonTitle'])
            },
            content: entry.getIn(['data', 'introSection', 'content'])
          },
          servicesSection: {
            title: entry.getIn(['data', 'servicesSection', 'title']),
            content: entry.getIn(['data', 'servicesSection', 'content'])
          },
          bookBanner: {
            title: entry.getIn(['data', 'bookBanner', 'title']),
            content: entry.getIn(['data', 'bookBanner', 'content']),
            buttonLinkTitle: entry.getIn([
              'data',
              'bookBanner',
              'buttonLinkTitle'
            ])
          },
          staffSection: {
            title: entry.getIn(['data', 'staffSection', 'title'])
          },
          benefitsSection: {
            title: entry.getIn(['data', 'benefitsSection', 'title']),
            image: entry.getIn(['data', 'benefitsSection', 'image']),
            content: entry.getIn(['data', 'benefitsSection', 'content']),
            benefits: entry.getIn(['data', 'benefitsSection', 'benefits'])
          },
          healthProviders: entry
            .getIn(['data', 'healthProviders'])
            .map(provider => ({
              title: provider.get('title'),
              image: provider.get('image')
            })),
          gallery: {
            title: entry.getIn(['data', 'gallery', 'title']),
            images: entry
              .getIn(['data', 'gallery', 'images'])
              .map(image => ({
                caption: image.get('caption'),
                image: image.get('image')
              })),
            embeds: entry
              .getIn(['data', 'gallery', 'embeds'])
              .map(embed => ({
                embed: embed.get('embed')
              }))
          },
          enquirySection: {
            title: entry.getIn(['data', 'enquirySection', 'title']),
            content: entry.getIn(['data', 'enquirySection', 'content'])
          }
        }}
      />
    </div>
  )
}

const CMS = window.CMS

CMS.registerPreviewTemplate('home-page', HomePagePreview)
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle(
  'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,600,700'
)
CMS.registerPreviewStyle('/admin/cms.bundle.css')

window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})
