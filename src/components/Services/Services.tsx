import ServicesIntro from './util/ServicesIntro';
import ServicesPlans from './util/ServicesPlans';
import ServicesPlansSingle from './util/ServicesPlansSingle';

function Services() {
  return (
    <div className='Services'>
      <ServicesIntro />
      <ServicesPlans />
      <ServicesPlansSingle />
    </div>
  );
}

export default Services;
