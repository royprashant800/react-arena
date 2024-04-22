import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null); 

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1808466&lng=72.6471847&restaurantId=45093&catalog_qa=undefined&isMenuUx4=true");

        const json = await data.json();
        setResInfo(json.data)
        console.log(json);
    }

    // const { costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    return resInfo === null ? <Shimmer /> : (
        <div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</h3>
            <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <ul>
                <li>Burger</li>
                <li>Sandwich</li>
                <li>Pauva</li>
                <li>Paneer Kadhai</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;