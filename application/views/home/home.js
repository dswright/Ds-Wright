import React from 'react';
import Helmet from 'react-helmet';

import Profile from './sections/profile';
import Career from './sections/career';
import SideProjects from './sections/side-projects';
import Hobbies from './sections/hobbies';
import Footer from './sections/footer';
import Header from './sections/header';

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
    <Header />
    <Profile />
    <Career />
    <SideProjects />
    <Hobbies />
    <Footer />
  </div>
);

export default Home;
