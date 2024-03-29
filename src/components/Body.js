import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { CDN_URL } from '../utils/constants';
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';

const Body = () => {
 //local state variable - super powerful variable
 const [listOfRestaurants, setListOfRestaurants] = useState([]) 

 useEffect(() => {
  fetchData();
 }, []);

 const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1808466&lng=72.6471847&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();
  
  //optional Chaining
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }

 //Conditional rendering 
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div>
          <div className="filter">
            <div className="search">
              <input className='search-box' type='text'/>
              <button>Search</button>
            </div>
            <button className='filter-btn' onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.5
                )
                setListOfRestaurants(filteredList);
            }}>Top Rated restaurants</button>
          </div>
          <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
          </div>
      </div>
  )
}

export default Body;