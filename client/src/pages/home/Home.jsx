import { Featured, Header, Navbar, PropertyList } from '../../components';

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
      </div>
    </div>
  );
};

export default Home;
