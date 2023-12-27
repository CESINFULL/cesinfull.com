import CustomNavbar from '../components/CustomNavbar';
import Hero from '../components/Hero';
import MainPageLinks from '../components/MainPageLinks';
import Sponsors from '../components/Sponsors';
import WhoWeAre from '../components/WhoWeAre';

const Home = () => {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <div className='bg-gray-900 text-white'>
        <div className='container mx-auto'>
          <WhoWeAre />
          <Sponsors />
          <MainPageLinks />
        </div>
      </div>
    </>
  );
};

export default Home;
