import {
  Featured,
  FeaturedProperties,
  Header,
  Navbar,
  PropertyList,
  MailList,
  Footer,
} from '../../components';

import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home-title">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
