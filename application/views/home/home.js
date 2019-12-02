import React from 'react';
import Helmet from 'react-helmet';
// import { setUser } from '#application/ducks/user';
// import { Carousel } from 'react-bootstrap';
// import homeBanner from './images/my-neighbors-farm-banner.jpg';
// import SellOnline from './sell-online';
// import ProductDeliveries from './product-deliveries';
// import AboutUs from './about-us';

import Profile from './sections/profile';
import Career from './sections/career';
import SideProjects from './sections/side-projects';
import Hobbies from './sections/hobbies';
import Specialties from './sections/specialties';
import Contact from './sections/contact';
import Footer from './sections/footer';

const Home = () => (
  <div>
    <Helmet
      title="DSWright - Dylan Wright's Portfolio"
      meta={[
        {
          name: 'description',
          content:
            'Dylan Wright is a software engineer specializing in React, product usability, and growth.'
        }
      ]}
    />
    <Profile />
    <Career />
    <SideProjects />
    <Specialties />
    <Hobbies />
    <Contact />
    <Footer />
  </div>
);

export default Home;
