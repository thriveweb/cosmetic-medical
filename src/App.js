import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

import ScrollToTop from './components/ScrollToTop'
import Meta from './components/Meta'
import Schema from './components/Schema'
import Home from './views/Home'
import NoMatch from './views/NoMatch'
import Nav from './components/Nav'
import NavPopup from './components/NavPopup'
import Footer from './components/Footer'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import data from './data.json'

class App extends Component {
  state = {
    data,
    navPopup: false
  }

  handlePopupClose = () => this.setState({ navPopup: false })
  handlePopupOpen = () => this.setState({ navPopup: true })

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const socialSettings = this.getDocument('settings', 'social')
    const services = this.getDocuments('services')
    const staff = this.getDocuments('staff')
    const homePage = this.getDocument('pages', 'home')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      address,
      openingHours,
      phone,
      email
    } = globalSettings

    let navLinks = [
      'About',
      'Services',
      'Our Dentists & Staff',
      _get(homePage, 'gallery.images.length', null) ? 'Gallery' : null,
      'Contact'
    ]
    return (
      <Router>
        <div className='React-Wrap'>
          <ScrollToTop />
          <ServiceWorkerNotifications reloadOnUpdate />
          <Helmet titleTemplate={`${siteTitle} | %s`} />
          <Schema
            type='Dentist'
            name={siteTitle}
            url={siteUrl}
            email={email}
            phone={phone}
            address={address}
            openingHours={openingHours}
            logoUrl={`${siteUrl}/images/teeth-on-ferry-logo@2x.png`}
          />
          <Meta
            title={siteTitle}
            url={siteUrl}
            description={siteDescription}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
            headerScripts={globalSettings.headerScripts}
          />

          <Nav
            navLinks={navLinks}
            handlePopupOpen={this.handlePopupOpen}
            phone={globalSettings.phone}
            bookNow={globalSettings.bookNow}
          />
          <NavPopup
            active={this.state.navPopup}
            handleClose={this.handlePopupClose}
            navLinks={navLinks}
            phone={globalSettings.phone}
            bookNow={globalSettings.bookNow}
          />
          <Switch>
            <Route
              path='/'
              exact
              render={props => (
                <Home
                  page={homePage}
                  services={services}
                  staff={staff}
                  globalSettings={globalSettings}
                  socialSettings={socialSettings}
                  {...props}
                />
              )}
            />
            <Route render={() => <NoMatch siteUrl={siteUrl} />} />
          </Switch>
          <Footer
            globalSettings={globalSettings}
            socialSettings={socialSettings}
            navLinks={navLinks}
          />
        </div>
      </Router>
    )
  }
}

export default App
