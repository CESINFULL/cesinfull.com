import CustomNavbar from '../components/CustomNavbar';
import Hero from '../components/Hero';
import MainPageLinks from '../components/MainPageLinks';
import Sponsors from '../components/Sponsors';
import WhoWeAre from '../components/WhoWeAre';
import Footer from '../components/Footer';

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
      <Footer />
    </>
  );
};

export default Home;
