import MainSlider from '../components/MainSlider';
import ElectronicsDeals from '../components/ElectronicsDeals';
import QuickLinks from '../components/QuickLinks';
import Navbar from '../components/Navbar';
import SuggestedProducts from '../components/SuggestedProducts';
import VisitedProducts from '../components/VisitedProducts';

export default function Home() {
  return (
    <>
      <Navbar />
      <QuickLinks />
      <div className="card-container slider-inline">
        <MainSlider />
        <ElectronicsDeals />
      </div>
      <SuggestedProducts /> 
      <VisitedProducts />
    </>
  );
}
