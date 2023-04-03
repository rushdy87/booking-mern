import { Featured, Header, Navbar } from '../../components';

import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
      </div>
    </div>
  );
};

export default Home;
