import React from 'react'
import Helmet from 'react-helmet'
import 'react-toastify/dist/ReactToastify.min.css'
import NewLandingForm from '../components/NewLandingForm'
import BadgeIndustry from '../components/BadgeIndustry'
import { Title, Subtitle } from 'bloomer'
import 'bulma'
import '../assets/fonts/Lato-Black.ttf'
import '../assets/fonts/Lato-BlackItalic.ttf'
import '../assets/fonts/Lato-Bold.ttf'
import '../assets/fonts/Lato-BoldItalic.ttf'
import '../assets/fonts/Lato-Hairline.ttf'
import '../assets/fonts/Lato-HairlineItalic.ttf'
import '../assets/fonts/Lato-Italic.ttf'
import '../assets/fonts/Lato-Light.ttf'
import '../assets/fonts/Lato-LightItalic.ttf'
import '../assets/fonts/Lato-Regular.ttf'

import logo from '../resources/cobuildlab.png'
import badge1 from '../resources/badges1.png'
import badge2 from '../resources/badges2.png'
import badge3 from '../resources/badges3.png'
import badge4 from '../resources/badges4.png'
import graphic from '../resources/phases.png'

export default class EcommerceDevGraphic extends React.Component {
  render() {
    const siteTitle = 'Get your Business ready to Sell Online'
    const siteSubtitle =
      'We specialize in transforming your Business for the Digital World.'
    const siteDescription =
      'We develop the best strategy to take your Business to the next Level. We create a plan for tools, integrations, and support to enable your operations in the e-commerce market.'
    const landingName = 'Ecommerce Development Graphic'
    const text =
      'Lorem ipsum dolor sit amet, maecenas dictum in est, tincidunt nec suscipit vitae et et est. Justo vel lorem taciti elementum. Suspendisse et integer, aliquam nostra sollicitudin lacus, molestiae sit praesent ultrices augue arcu elit. Risus eu nulla varius, eu est morbi, lacinia elit vivamus phasellus volutpat sed mauris, nascetur vitae illo proin pulvinar, hac praesent varius.'

    return (
      <React.Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <section className="hero is-fullheight">
          <div className="hero-body no-padding-hero">
            <div className="container is-fluid is-marginless">
              <div className="columns is-desktop">
                <div className="column is-8 h-100 bg-header-graphic">
                  <div className="view-content-zoom">
                    <div>
                      <img src={logo} className="logo" />
                    </div>
                    <Title className="title-squeezing">
                      Get your Business ready <br /> to Sell Online
                    </Title>
                    <Subtitle className="subtitle-squeezing">
                      {siteSubtitle}
                    </Subtitle>
                    <div className="has-text-centered">
                      <img src={graphic} className="img-graphic" />
                    </div>
                    <BadgeIndustry />
                  </div>
                </div>
                <div className="column h-100 is-4 bg-form-landing Aligner">
                  <div className="has-text-centered view-badge">
                    <img src={badge1} className="badge" />
                    <img src={badge2} className="badge" />
                    <img src={badge3} className="badge" />
                    <img src={badge4} className="badge-google" />
                  </div>
                  <NewLandingForm landingName={landingName} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}