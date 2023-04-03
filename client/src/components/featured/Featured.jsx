import './Featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          src="https://filiamovia.com/content/images/size/w1050/2019/03/nyc-35.jpg"
          alt=""
          className="featured-img"
        />
        <div className="featured-titles">
          <h1>New York</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featured-item">
        <img
          src="https://filiamovia.com/content/images/size/w1050/2019/03/nyc-35.jpg"
          alt=""
          className="featured-img"
        />
        <div className="featured-titles">
          <h1>Barcelona</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featured-item">
        <img
          src="https://filiamovia.com/content/images/size/w1050/2019/03/nyc-35.jpg"
          alt=""
          className="featured-img"
        />
        <div className="featured-titles">
          <h1>Dubai</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
