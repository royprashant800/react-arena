import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { CDN_URL } from '../utils/constants';
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
 //local state variable - super powerful variable
 const [listOfRestaurants, setListOfRestaurants] = useState([]);
 const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
 const [searchtext, setSearchtext] = useState(""); 

 useEffect(() => {
  fetchData();
 }, []);

 const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1808466&lng=72.6471847&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();
  
  //optional Chaining
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }

 const onlineStatus = useOnlineStatus();
 if(onlineStatus === false) {
  return (
    <h1>Looks like you are offline...Please check your internet connection!!!</h1>
  )
 }

 //Conditional rendering 
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div>
          <div className="filter">
            <div className="search">
              <input className='search-box' type='text' value={searchtext} onChange={(e) => {
                setSearchtext(e.target.value)
              }}/>
              <button 
                onClick={() => {
                  //Filter the restaurant card and update the UI

                  const filteredRestaurant = listOfRestaurants.filter((res) => 
                    res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                  );

                  setFilteredListOfRestaurants(filteredRestaurant);
                }}
              >Search</button>
            </div>
            <button className='filter-btn' onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.5
                )
                setListOfRestaurants(filteredList);
            }}>Top Rated restaurants</button>
          </div>
          <div className="res-container">
            {filteredListOfRestaurants.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
            ))}
          </div>
      </div>
  )
}

export default Body;