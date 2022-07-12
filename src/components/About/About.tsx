import AboutIntro from './util/AboutIntro';
import AboutStats from './util/AboutStats';
import AboutContact from './util/AboutContact';

function About() {
  return (
    <div className='About'>
      <AboutIntro />
      <AboutStats />
      <AboutContact />
    </div>
  );
}

export default About;
