import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { CDN_URL } from '../utils/constants';

const Body = () => {
    return (
        <div>
            <div className="filter">
                <button className='filter-btn' onClick={() => {
                    console.log("btn");
                }}>Top Rated restaurants</button>
            </div>
            <div className="res-container">
              {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              ))}
            </div>
        </div>
    )
}

export default Body;