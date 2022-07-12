import HomeIntro from './util/Hero';
import Features from './util/Features';
import BusinessModel from './util/BusinessModel';
import Newsletter from './util/Newsletter';
import Pricing from './util/Pricing';
import PricingSingle from './util/PricingSingle';

function Home() {
  return (
    <div className='Home'>
      <HomeIntro />
      <Features />
      <BusinessModel />
      <Newsletter />
      <Pricing />
      <PricingSingle />
    </div>
  );
}

export default Home;
