import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { Header, Navbar, SearchItem } from '../../components';
import './List.css';
import { DateRange } from 'react-date-range';
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-search-title">Search</h1>
            <div className="list-search-item">
              <label htmlFor="">Destination</label>
              <input
                type="text"
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
              />
            </div>
            <div className="list-search-item">
              <label htmlFor="">Chick in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, 'MM/dd/yyyy')}`} to{' '}
                {`${format(date[0].endDate, 'MM/dd/yyyy')}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list-search-item">
              <label htmlFor="">Options</label>
              <div className="list-search-options">
                <div className="list-search-otion-item">
                  <span className="list-search-otion-text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="list-search-otion-input" />
                </div>
                <div className="list-search-otion-item">
                  <span className="list-search-otion-text">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="list-search-otion-input" />
                </div>
                <div className="list-search-otion-item">
                  <span className="list-search-otion-text">Adult</span>
                  <input
                    type="number"
                    className="list-search-otion-input"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="list-search-otion-item">
                  <span className="list-search-otion-text">Children</span>
                  <input
                    type="number"
                    className="list-search-otion-input"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="list-search-otion-item">
                  <span className="list-search-otion-text">Room</span>
                  <input
                    type="number"
                    className="list-search-otion-input"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>

          <div className="list-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
