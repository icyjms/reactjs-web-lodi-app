import Benefits from './benefits/Benefits';
import GetInTouch from './getInTouch/GetInTouch';
import Home from 'views/home/Home';
import HowItWorks from 'views/howItWorks/HowItWorks';
import Partner from 'views/partner/Partner';

const Main = () => {
  return (
    <>
      <Home />
      <Benefits />
      <HowItWorks />
      <Partner />
      <GetInTouch />
    </>
  );
};

export default Main;
